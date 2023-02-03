# Ebisu's Bay SDK

## Documentation
This documentation offers an array of functionalities for engaging with the EbisusBay Marketplace.

For a more in-depth documentation, refer to the following link: 
https://docs.ebisusbay.com

<br/>

---

<br/>

## Dependency
To interact with the SDK, access to the available listings in the marketplace is required. The method for accessing is as follows:

```curl
  --request GET \
  --url https://api.ebisusbay.com/listings \
  --header 'accept: application/json'
```

If you're seeking clarification on the response, the official documentation listed under the get_listings section can always be consulted.

<br/>

---
<br/>

## Installation

```sh
  npm i --save @ebisusbay/core    
```

<br/>

## Usage

<br/>

### Import


```ts
import { EbisusBaySdk }  from '@ebisusbay/core/lib';
```

<br/>

### Create Instance

```ts

  const sdk = new EbisusBaySdk(); // Mainnet

  // OR

  const sdk = new EbisusBaySdk({ environment: 'testnet' });
```

<br/>

### Authentication

```ts  
  const walletAddress: string; // Current wallet address
  const userProvider: Web3Provider; // Web3Provider of wallet connected

  sdk.setProvider(walletAddress, userProvider);
```

<br/>

### Create Listings

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

<br/>

### Update Listings

```ts
  const listings = [
    {
      tokenId: '1234',
      collectionAddress: '0x0...',
      price: "1", // CRO
      expirationDate: 12345678 // Seconds
    }
  ]

  await sdk.updateListings(listings);
```

<br/>

### Cancel Listings

```ts
  const listingIds: string[] = [
    '1234'
  ];

  await sdk.cancelListing(listingIds);
```

<br/>

### Purchase Listings

```ts
  const listingIds: string[] = ['1233', '2233']
  const receipt =  await sdk.purchaseListings(listingIds);
```
