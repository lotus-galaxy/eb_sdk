import { Contract } from 'ethers';

import { Contract as ContractEnum, contractDictionary } from '../types';
import { AuthService } from '.';

class ContractService {
  public getContract(contract: ContractEnum) {
    const provider = AuthService.getProvider();
    const signer = provider!.getSigner();
    const { address, abi } = contractDictionary()[contract];
    return new Contract(address!, JSON.stringify(abi), signer);
  }
}

export default new ContractService();
