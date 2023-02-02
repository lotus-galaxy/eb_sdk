import { Listing as ListingInterface, ItemType, ListingState, ListingParams } from '../../shared/types';
import * as UUID from 'uuid-int';
import { ethers } from 'ethers';
import { CMSService, APIService, ConfigService, AuthService, ContractService } from '../../shared/services';
import { Contract } from '../../shared/types';

const generator = UUID(0);

export class ListingModule {
  public async createListings(listings: ListingParams[]) {
    await this.upsertListings(listings);
  }

  public async updateListings(listings: ListingParams[]) {
    await this.upsertListings(listings);
  }

  private async upsertListings(listings: ListingParams[]) {
    // listings.forEach(listing => {
    //   if(typeof listing.collectionAddress !== 'string' || typeof listing.tokenId !== 'string' ||typeof listing.price !== 'number' ||typeof listing.expirationDate !== 'number') throw new Error();
    // })

    const pendingListings: ListingInterface[] = await Promise.all(
      listings.map(async (listing) => {
        const { data: nft } = await APIService.get('nft', {
          params: { tokenId: listing.tokenId, collection: listing.collectionAddress },
        });
        return {
          ...listing,
          is1155: nft.collection.multiToken,
        };
      }),
    );
    const listingsResponse = await this.getAllListingsByUser();
    const existingListings = listingsResponse.data.listings.filter((eListing: any) => {
      return pendingListings.some((pListing) => {
        return (
          this.caseInsensitiveCompare(eListing.nftAddress, pListing.collectionAddress!) &&
          eListing.nftId.toString() === pListing!.tokenId!.toString()
        );
      });
    });

    // Split legacy so that we can run one cancel tx for all gasless
    const cancelIds = {
      legacy: existingListings
        .filter((listing: any) => !this.isGaslessListing(listing.listingId))
        .map((listing: any) => listing.listingId),
      gasless: existingListings
        .filter((listing: any) => this.isGaslessListing(listing.listingId))
        .map((listing: any) => listing.listingId),
    };

    if (cancelIds.gasless.length > 0) {
      const { data: orders } = await CMSService.delete('gasless-listing', {
        params: { listingIds: cancelIds.gasless },
      });
      const ship = ContractService.getContract(Contract.SHIP);
      const tx = await ship.cancelOrders(orders.data);
      await tx.wait();
    }

    for (const listing of pendingListings) {
      listing.salt = generator.uuid();
      listing.listingTime = Math.round(new Date().getTime() / 1000);
      listing.expirationDate = Math.round(listing.expirationDate / 1000);
      const { objectSignature, objectHash } = await this.createListingSigner(listing);
      listing.sellerSignature = objectSignature;
      listing.seller = AuthService.getWalletAddress().toLowerCase();
      listing.digest = objectHash;
      const res = await CMSService.post('gasless-listing', listing);
    }
  }

  public async cancelListing(listingIds: string[]) {
    listingIds.forEach((id) => {
      if (typeof id !== 'string') throw new Error();
    });

    const { data: orders } = await CMSService.delete('gasless-listing', { params: { listingIds } });

    const ship = ContractService.getContract(Contract.SHIP);
    const tx = await ship.cancelOrders(orders.data);
    await tx.wait();
  }

  public async purchaseListings(listingIds: string[]) {
    listingIds.forEach((id) => {
      if (typeof id !== 'string') throw new Error();
    });

    const listingsResponse = await this.getListingsById(listingIds);
    const cartPrice = listingsResponse.data.listings.reduce((p: number, n: any) => p + parseInt(n.price, 10), 0);

    const buyContract = ContractService.getContract(Contract.SHIP);
    const price = ethers.utils.parseEther(`${cartPrice}`);

    const { data: serverSig } = await CMSService.get('gasless-listing/validator', {
      params: { address: AuthService.getWalletAddress().toLowerCase(), listingIds },
    });

    const { signature, orderData, ...sigData } = serverSig.data;
    const total = price.add(sigData.feeAmount);

    const tx = await buyContract.fillOrders(orderData, sigData, signature, { value: total });
    return await tx.wait();
  }

  private async createListingSigner(listing: ListingInterface) {
    const domain = {
      name: 'EB TradeShip',
      version: '1.0',
      chainId: ConfigService.chain.id,
      verifyingContract: ConfigService.contracts.gaslessListing,
    };

    const typeOrder = {
      OfferItem: [
        { name: 'itemType', type: 'uint8' },
        { name: 'token', type: 'address' },
        { name: 'identifierOrCriteria', type: 'uint256' },
        { name: 'startAmount', type: 'uint256' },
        { name: 'endAmount', type: 'uint256' },
      ],
      Order: [
        { name: 'offerer', type: 'address' },
        { name: 'offerings', type: 'OfferItem[]' },
        { name: 'considerations', type: 'OfferItem[]' },
        { name: 'orderType', type: 'uint8' },
        { name: 'startAt', type: 'uint256' },
        { name: 'endAt', type: 'uint256' },
        { name: 'salt', type: 'uint256' },
      ],
    };

    const considerationPrice = ethers.utils.parseEther(`${listing.price}`);

    const offerItem = {
      itemType: listing?.is1155 ? ItemType.ERC1155 : ItemType.ERC721,
      token: listing.collectionAddress,
      identifierOrCriteria: listing.tokenId,
      startAmount: 1,
      endAmount: 1,
    };

    const considerationItem = {
      itemType: 0,
      token: ethers.constants.AddressZero,
      identifierOrCriteria: 0,
      startAmount: considerationPrice,
      endAmount: considerationPrice,
    };

    const order = {
      offerer: AuthService.getWalletAddress(),
      offerings: [offerItem],
      considerations: [considerationItem],
      orderType: 0,
      startAt: listing.listingTime,
      endAt: listing.expirationDate,
      salt: listing.salt,
    };

    const provider = AuthService.getProvider();
    const signer = provider!.getSigner();

    const objectHash = ethers.utils._TypedDataEncoder.hash(domain, typeOrder, order);
    const objectSignature = await signer._signTypedData(domain, typeOrder, order);

    return { objectSignature, objectHash };
  }

  private isGaslessListing = (listingId: string) => {
    return listingId && listingId.toString().startsWith('0x');
  };

  private caseInsensitiveCompare(str1: string, str2: string) {
    return str1?.toLowerCase() === str2?.toLowerCase();
  }

  private async getAllListingsByUser() {
    const query = {
      state: ListingState.ACTIVE,
      page: 1,
      pageSize: 1000,
      sortBy: 'listingId',
      direction: 'desc',
      seller: AuthService.getWalletAddress().toLowerCase(),
    };

    return APIService.get('listings', { params: query });
  }

  public async getListingsById(listingIds: string[]) {
    const ids = listingIds.reduce((list, currentId) => {
      return `${currentId},${list}`;
    }, '');

    const query = {
      state: ListingState.ACTIVE,
      page: 1,
      pageSize: 1000,
      sortBy: 'listingId',
      direction: 'desc',
      listingId: ids,
    };

    return APIService.get('listings', { params: query });
  }
}
