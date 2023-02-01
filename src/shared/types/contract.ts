import { ConfigService } from '../services';
import { ShipContract } from '../contracts';
import * as ethers from 'ethers';

export enum Contract {
  SHIP,
}

export const contractDictionary = () => {
  return {
    [Contract.SHIP]: { address: ConfigService.contracts.gaslessListing, abi: ShipContract.abi },
  };
};

export type UserProvider = ethers.ethers.providers.Web3Provider | ethers.ethers.providers.JsonRpcProvider;
