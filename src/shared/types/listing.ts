export enum ItemType {
  NATIVE = 0,
  ERC721 = 1,
  ERC1155 = 2,
  ERC20 = 3,
  LEGACY_LISTING = 6,
}

export enum ListingState {
  ACTIVE = 0,
  SOLD = 1,
  CANCELLED = 2,
}

export interface OfferItem {
  itemType: ItemType;
  token: string;
  identifierOrCriteria: number;
  startAmount: number;
  endAmount: number;
}

export interface ConsiderationItem {
  itemType: ItemType.NATIVE;
  token: string;
  identifierOrCriteria: number;
  startAmount: number;
  endAmount: number;
}

export interface Order {
  offerer: string;
  offerings: [OfferItem];
  considerations: [ConsiderationItem];
  orderType: ItemType.NATIVE;
  startAt: number;
  endAt: number;
  salt: number;
}

export interface Listing {
  listingId?: string;
  price: string;
  is1155: boolean;
  expirationDate: number;
  sellerSignature?: string;
  salt?: number;
  collectionAddress?: string;
  tokenId?: string;
  listingTime?: number;
  digest?: string;
  seller?: string;
}

export interface ListingParams {
  tokenId: string;
  collectionAddress: string;
  price: string;
  expirationDate: number;
}
