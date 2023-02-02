import { ethers } from 'ethers';
import { ConfigService } from '../../../shared/services';
import { ListingParams } from '../../../shared/types';

it('test', () => {
  expect(1).toBe(1);
});

export const userAddress = '0xdf2d986f951f640ed8cc304af14df798ae953b94';

export const provider = new ethers.providers.JsonRpcProvider({
  url: ConfigService.rpc.read!,
  timeout: 5000,
});

export const testListingExample: ListingParams[] = [
  {
    tokenId: '427',
    collectionAddress: '0x000732Ddc0f7208b2400944d4a7296bc001aE866',
    price: '1',
    expirationDate: 1000000000,
  },
];

export const upsertListingExample = {
  data: {
    status: 200,
    page: 1,
    totalCount: 1,
    pageSize: 100,
    totalPages: 1,
    listings: [
      {
        listingId: '0x52a11316591b875fb09a98161c058f17dce0b77af614c4598466ae92243306ac',
        nftId: '427',
        nftAddress: '0x000732ddc0f7208b2400944d4a7296bc001ae866',
        valid: true,
        is1155: false,
        invalid: 0,
        seller: '0xdf2d986f951f640ed8cc304af14df798ae953b94',
        purchaser: null,
        state: 0,
        price: '1',
        royalty: '0',
        fee: '0',
        saleTime: 0,
        listingTime: 1675228645,
        expirationDate: 1677820637,
        nft: {
          nftId: '427',
          nftAddress: '0x000732ddc0f7208b2400944d4a7296bc001ae866',
          edition: 427,
          name: 'Barn Cat #427',
          original_image: 'https://www.lazyhorseraceclub.com/barncatmeta/427.png',
          image: 'https://cdn.ebisusbay.biz/proxy/https://www.lazyhorseraceclub.com/barncatmeta/427.png',
          description: 'Barn Cats',
          attributes: [
            {
              trait_type: 'Background',
              value: 'White Toxic Fence',
            },
            {
              trait_type: 'Base Cat',
              value: 'Brown Cat',
            },
            {
              trait_type: 'Nose',
              value: 'Black',
            },
            {
              trait_type: 'Clothes',
              value: 'Suspender',
            },
            {
              trait_type: 'Eyes',
              value: 'Green',
            },
            {
              trait_type: 'Hat',
              value: 'None',
            },
            {
              trait_type: 'Neck Wear',
              value: 'None',
            },
            {
              trait_type: 'Earrings',
              value: 'None',
            },
            {
              trait_type: 'Artist Signature',
              value: 'MADD',
            },
          ],
        },
        collection: {
          address: '0x000732Ddc0f7208b2400944d4a7296bc001aE866',
          name: 'Barn Cats',
          slug: 'barn-cats',
          metadata: {
            description: '',
            avatar: 'https://cdn.ebisusbay.com/img/collections/lazyhorse/barncats/avatar.webp',
            card: 'https://cdn.ebisusbay.com/img/collections/lazyhorse/card.png',
            banner: 'https://cdn.ebisusbay.com/img/collections/lazyhorse/banner.png',
            website: 'https://www.lazyhorseraceclub.com',
            twitter: 'https://twitter.com/LazyHorseRC',
            discord: 'https://discord.gg/lhrc',
            medium: 'https://medium.com/@lazyhorseraceclub',
            categories: [],
          },
        },
      },
    ],
  },
};

export const createListingExample = {
  data: {
    status: 200,
    page: 1,
    totalCount: 1,
    pageSize: 100,
    totalPages: 1,
    listings: [
      {
        listingId: '0xc70eece715aa020859a2dd4dd3d2c70bcfe2b76ee7b7e4b70bb529c9bfb7b32c',
        nftId: '89',
        nftAddress: '0x0efccb1889eb8ee3b92a805a5d66d49fc9ae885e',
        valid: true,
        is1155: false,
        invalid: 0,
        seller: '0xdf2d986f951f640ed8cc304af14df798ae953b94',
        purchaser: null,
        state: 0,
        price: '1',
        royalty: '0',
        fee: '0',
        saleTime: 0,
        listingTime: 1674834609,
        expirationDate: 1677426603,
        nft: {
          nftId: '89',
          nftAddress: '0x0efccb1889eb8ee3b92a805a5d66d49fc9ae885e',
          edition: 89,
          name: 'Pocket Demons #89',
          original_image: 'https://gateway.ebisusbay.com/ipfs/QmQKkmHfGPWrcXsyv6kRxNLgemzjXndQWwtDehL2aN7iSs/89.png',
          image: 'https://cdn.ebisusbay.biz/QmQKkmHfGPWrcXsyv6kRxNLgemzjXndQWwtDehL2aN7iSs/89.png',
          description:
            'Welcome to the Under World! Meet our collection of 666 unique Pocket Demons. Support and join our community, crazy adventures and fantastic prizes are waiting for you.',
          attributes: [
            {
              trait_type: 'Background',
              value: 'Light Blue',
            },
            {
              trait_type: 'Body',
              value: 'Blue',
            },
            {
              trait_type: 'Outfit',
              value: 'Fire Shirt',
            },
            {
              trait_type: 'Mouth',
              value: 'Normal',
            },
            {
              trait_type: 'Eyes',
              value: 'Penny',
            },
            {
              trait_type: 'Headware',
              value: 'Ushanka',
            },
          ],
        },
        collection: {
          address: '0x0EFccB1889EB8eE3b92a805A5d66D49fC9ae885E',
          name: 'Pocket Demons',
          slug: 'pocket-demons',
          metadata: {
            description:
              'The Pocket Demons project is a collection of 666 uniquely generated demon characters. Each Demon is generated from a pool of over 70 traits. These Demons also carry unique stats and attacks that are utilized in our P2E Game!',
            avatar: 'https://cdn.ebisusbay.com/img/collections/pocket-demons/avatar.webp',
            card: 'https://cdn.ebisusbay.com/img/collections/pocket-demons/card.webp',
            banner: 'https://cdn.ebisusbay.com/img/collections/pocket-demons/banner.webp',
            website: 'https://www.pocketdemons.com/',
            twitter: 'https://twitter.com/PocketDemonsNFT',
            discord: 'https://discord.gg/sdgRtxt8vJ',
            categories: [],
          },
        },
      },
    ],
  },
};

const nftRequestData = {
  data: {
    status: 200,
    error: null,
    collection: {
      address: '0x000732Ddc0f7208b2400944d4a7296bc001aE866',
      owner: null,
      multiToken: false,
      name: 'Barn Cats',
      slug: 'barn-cats',
      onChain: false,
      verification: {
        verified: true,
        doxx: false,
        kyc: false,
      },
      listable: true,
      stats: {
        total: {
          active: '16',
          complete: '1',
          cancelled: '0',
          floor_price: '1.0',
          avg_sale_price: '1.0',
          volume: '1.0',
          royalty: '0.0',
          fee: '0.015',
          volume1d: '0.0',
          volume7d: '1.0',
          volume30d: '1.0',
          sales1d: '0',
          sales7d: '1',
          sales30d: '1',
        },
      },
      metadata: {
        verified: true,
        description: '',
        avatar: 'https://cdn.ebisusbay.com/img/collections/lazyhorse/barncats/avatar.webp',
        card: 'https://cdn.ebisusbay.com/img/collections/lazyhorse/card.png',
        banner: 'https://cdn.ebisusbay.com/img/collections/lazyhorse/banner.png',
        website: 'https://www.lazyhorseraceclub.com',
        twitter: 'https://twitter.com/LazyHorseRC',
        discord: 'https://discord.gg/lhrc',
        medium: 'https://medium.com/@lazyhorseraceclub',
      },
    },
    blacklisted: 0,
    listings: [
      {
        listingId: '0x01c580d3fa524b0859ae26566c3b6d90ffc78c057608f47113bc12871910ae66',
        is1155: false,
        invalid: 0,
        valid: true,
        seller: '0xdf2d986f951f640ed8cc304af14df798ae953b94',
        purchaser: null,
        state: 2,
        price: '1',
        royalty: '0',
        fee: '0',
        saleTime: 0,
        listingTime: 1674834805,
        expirationDate: 1677426800,
        sellerSignature: '',
        salt: 3512383160975360,
        nftId: '427',
        nftAddress: '0x000732ddc0f7208b2400944d4a7296bc001ae866',
      },
      {
        listingId: '0x2d74790be6c739b36ac139d267858e548b72f820cdc02885c2e99747c2ae95ac',
        is1155: false,
        invalid: 0,
        valid: true,
        seller: '0xdf2d986f951f640ed8cc304af14df798ae953b94',
        purchaser: null,
        state: 2,
        price: '1',
        royalty: '0',
        fee: '0',
        saleTime: 0,
        listingTime: 1674834878,
        expirationDate: 1677426848,
        sellerSignature: '',
        salt: 3512383314067456,
        nftId: '427',
        nftAddress: '0x000732ddc0f7208b2400944d4a7296bc001ae866',
      },
      {
        listingId: '0x1df492d6d859866b48e9f227471cd3b53ef7de6a179d2f23ee522e78fd66a4f3',
        is1155: false,
        invalid: 0,
        valid: true,
        seller: '0x0d614558cdef00a761e053428248626cdac7ab11',
        purchaser: '0xdF2D986f951f640ed8cc304af14DF798ae953b94',
        state: 1,
        price: '1',
        royalty: '0',
        fee: '0',
        saleTime: 0,
        listingTime: 1674846046,
        expirationDate: 1677438042,
        sellerSignature: '',
        salt: 3512406737158144,
        nftId: '427',
        nftAddress: '0x000732ddc0f7208b2400944d4a7296bc001ae866',
      },
      {
        listingId: '0x443f952555672ddc4114f4cd3236286056ad15c283d2f353f05427d238426a41',
        is1155: false,
        invalid: 0,
        valid: true,
        seller: '0xdf2d986f951f640ed8cc304af14df798ae953b94',
        purchaser: null,
        state: 0,
        price: '1',
        royalty: '0',
        fee: '0',
        saleTime: 0,
        listingTime: 1674850871,
        expirationDate: 1677442867,
        sellerSignature:
          '0xdb4bde850d2a46b1bee3d3a5371bd2828e243a9a1cf3a525635a5061e5c5fca854f1d6f43ef2e5ab6e5b1c03de29eef7d76e588eadfeb16932c23a0e45e1da961c',
        salt: 3512416853819392,
        nftId: '427',
        nftAddress: '0x000732ddc0f7208b2400944d4a7296bc001ae866',
      },
    ],
    nft: {
      nftId: '427',
      nftAddress: '0x000732ddc0f7208b2400944d4a7296bc001ae866',
      burnt: false,
      edition: 427,
      name: 'Barn Cat #427',
      original_image: 'https://www.lazyhorseraceclub.com/barncatmeta/427.png',
      image: 'https://cdn.ebisusbay.biz/proxy/https://www.lazyhorseraceclub.com/barncatmeta/427.png',
      description: 'Barn Cats',
      attributes: [
        {
          trait_type: 'Background',
          value: 'White Toxic Fence',
        },
        {
          trait_type: 'Base Cat',
          value: 'Brown Cat',
        },
        {
          trait_type: 'Nose',
          value: 'Black',
        },
        {
          trait_type: 'Clothes',
          value: 'Suspender',
        },
        {
          trait_type: 'Eyes',
          value: 'Green',
        },
        {
          trait_type: 'Hat',
          value: 'None',
        },
        {
          trait_type: 'Neck Wear',
          value: 'None',
        },
        {
          trait_type: 'Earrings',
          value: 'None',
        },
        {
          trait_type: 'Artist Signature',
          value: 'MADD',
        },
      ],
      owner: '0xdf2d986f951f640ed8cc304af14df798ae953b94',
    },
  },
};

export const onlyCreateListingRequest = (url: any, configData: any) => {
  switch (url) {
    case 'nft':
      return Promise.resolve(nftRequestData);
    case 'listings':
      return Promise.resolve(createListingExample);
  }
};

export const upsertListingRequest = (url: any, configData: any) => {
  switch (url) {
    case 'nft':
      return Promise.resolve(nftRequestData);
    case 'listings':
      return Promise.resolve(upsertListingExample);
  }
};
