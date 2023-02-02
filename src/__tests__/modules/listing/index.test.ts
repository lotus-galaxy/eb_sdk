import { EbisusBaySdk } from '../../../index';
import { Environment } from '../../../shared/types';
import { CMSService, APIService, AuthService, ContractService } from '../../../shared/services';
import { provider, testListingExample, userAddress, onlyCreateListingRequest, upsertListingRequest } from './mocks';

describe('Listing', () => {
  let stubs: any = {};

  beforeEach(() => {
    stubs.spyCmsPost = jest.spyOn(CMSService, 'post');
    stubs.spyCmsPost.mockReturnValue(
      //@ts-ignore
      Promise.resolve({
        status: 200,
      }),
    );

    stubs.spyCmsGet = jest.spyOn(CMSService, 'get');
    stubs.spyCmsPost.mockReturnValue(
      Promise.resolve({
        status: 200,
        data: { signature: '0x000000000', orderData: {}, feeAmount: 0 },
      }),
    );

    stubs.spyCmsDelete = jest.spyOn(CMSService, 'delete');
    stubs.spyCmsPost.mockReturnValue(
      Promise.resolve({
        status: 200,
        data: {},
      }),
    );

    stubs.spyApiGet = jest.spyOn(APIService, 'get');

    stubs.spyAuthGetProv = jest.spyOn(AuthService, 'getProvider');
    stubs.spyAuthGetProv.mockReturnValue({
      getSigner: () => {
        return {
          _signTypedData: (domain: any, typeOrder: any, order: any) => {
            return '0x0000000000000000000000000000000';
          },
        };
      },
    });

    stubs.spyAuthGetContract = jest.spyOn(ContractService, 'getContract');
    stubs.spyAuthGetContract.mockReturnValue({
      cancelOrders: () => {
        return Promise.resolve({
          wait: () => {
            return Promise.resolve({
              status: 200,
            });
          },
        });
      },
      fillOrders: () => {
        return Promise.resolve({
          wait: () => {
            return Promise.resolve({
              status: 200,
            });
          },
        });
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a listing and not have to cancel anything', async () => {
    let sdk = new EbisusBaySdk({ environment: 'testnet' });
    sdk.setProvider(userAddress, provider);

    stubs.spyApiGet.mockImplementation(onlyCreateListingRequest);

    await sdk.createListings(testListingExample);
    expect(stubs.spyCmsPost).toHaveBeenCalledTimes(1);
    expect(stubs.spyApiGet).toHaveBeenCalledTimes(2);
  });

  it('should cancel the listing and create a new one', async () => {
    let sdk = new EbisusBaySdk({ environment: 'testnet' });
    sdk.setProvider(userAddress, provider);

    stubs.spyApiGet.mockImplementation(upsertListingRequest);

    await sdk.updateListings(testListingExample);

    expect(stubs.spyCmsPost).toHaveBeenCalledTimes(1);
    expect(stubs.spyApiGet).toHaveBeenCalledTimes(2);
  });

  it('should make a request to cancel a listing', async () => {
    let sdk = new EbisusBaySdk({ environment: 'testnet' });
    sdk.setProvider(userAddress, provider);

    await sdk.cancelListing(['1111']);
    expect(stubs.spyCmsDelete).toHaveBeenCalledTimes(1);
  });

  it('should request the api token to make the purchase', async () => {
    let sdk = new EbisusBaySdk({ environment: 'testnet' });
    sdk.setProvider(userAddress, provider);

    await sdk.purchaseListings(['1111']);
    expect(stubs.spyCmsGet).toHaveBeenCalledTimes(1);
  });

  it('should return a one string', async () => {
    let sdk = new EbisusBaySdk({ environment: 'testnet' });
    const list = sdk.getListingsById(['123', '456']);
  });
});
