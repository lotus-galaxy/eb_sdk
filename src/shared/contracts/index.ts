import ConfigService from '../services/configService';
import { Contract } from '../types';

import ShipContract from './shipContract';

export { ShipContract };

export const contractDictionary = () => {
  return {
    [Contract.SHIP]: { address: ConfigService.contracts.gaslessListing, abi: ShipContract },
  };
};
