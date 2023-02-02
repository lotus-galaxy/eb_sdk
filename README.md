# Ebisu's Bay SDK


## Installation

```sh
  npm i --save eb-market    
```

## Usage

...

### Import


```ts
  import EbisusBaySdk from 'eb-market';
```

### Create Instance

```ts

  const sdk = new EbisusBaySdk(); // Mainnet

  // OR

  const sdk = new EbisusBaySdk({ environment: 'testnet' });
```

### Authentication

```ts  
  const walletAddress: string; // Current wallet address
  const userProvider: Web3Provider; // Web3Provider of wallet connected

  sdk.setProvider(walletAddress, userProvider);
```

### Create Listing

```ts
  const listings = [
    {
      tokenId: '1234',
      collectionAddress: '0x0...',
      price: 1, // CRO
      expirationDate: 12345678 // Seconds
    }
  ]

  await sdk.createListings(listings);
```

### Cancel Listing

```ts
  const listingIds: string[] = [
    '1234'
  ];

  await sdk.cancelListing(listingIds);
```

### Purchase Listings

```ts
  // listingIds: string[]
  const receipt =  await sdk.purchaseListings(listingIds);
```
