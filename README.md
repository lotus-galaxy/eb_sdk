# Ebisu's Bay SDK


## Installation

```sh
  npm i --save @ebisusbay/core    
```

## Usage

...

### Import


```ts
import { EbisusBaySdk }  from '@ebisusbay/core/lib';
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
      price: "1", // CRO
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
  const listingIds: string[] = ['1233', '2233']
  const receipt =  await sdk.purchaseListings(listingIds);
```
