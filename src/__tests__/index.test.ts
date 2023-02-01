import { ethers } from 'ethers';
import { EbisusBaySdk } from '../index';

import { ConfigService, AuthService } from '../shared/services';
import { Environment } from '../shared/types';

describe('EbisusBaySdk', () => {
  let stubs: any = {};

  beforeEach(() => {
    stubs.setEnvironment = jest.spyOn(ConfigService, 'setEnvironment');
    stubs.init = jest.spyOn(AuthService, 'init');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set the environment to production when no config specified', () => {
    const sdk = new EbisusBaySdk();
    expect(stubs.setEnvironment).toBeCalled();
    expect(stubs.setEnvironment).toHaveBeenCalledWith(Environment.production);
  });

  it('should set the environment specified in the config object', () => {
    const sdk = new EbisusBaySdk({ environment: Environment.development });
    expect(stubs.setEnvironment).toBeCalled();
    expect(stubs.setEnvironment).toHaveBeenCalledWith(Environment.development);
  });

  it('should setup auth service when set provider is called', () => {
    const userAddress = '0x0000000000000000000000000000000000000000';

    const provider = new ethers.providers.JsonRpcProvider({
      url: ConfigService.rpc.read!,
      timeout: 5000,
    });

    const sdk = new EbisusBaySdk({ environment: Environment.development });
    sdk.setProvider(userAddress, provider);

    expect(stubs.init).toBeCalled();
    expect(stubs.init).toHaveBeenCalledWith(userAddress, provider);
  });
});
