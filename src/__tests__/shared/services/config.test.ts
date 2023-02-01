import { ConfigService } from '../../../shared/services';

import { Environment } from '../../../shared/types';

describe('ConfigService', () => {
  let stubs: any = {};

  beforeEach(() => {
    stubs.setEnvironment = jest.spyOn(ConfigService, 'setEnvironment');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should retrieve the mainnet chain id when environment setup as production', () => {
    ConfigService.setEnvironment(Environment.production);
    expect(stubs.setEnvironment).toBeCalled();
    expect(stubs.setEnvironment).toHaveBeenCalledWith(Environment.production);
    expect(ConfigService.chain.id).toBe('25');
  });

  it('should retrieve the mainnet chain id when environment setup as development', () => {
    ConfigService.setEnvironment(Environment.development);
    expect(stubs.setEnvironment).toBeCalled();
    expect(stubs.setEnvironment).toHaveBeenCalledWith(Environment.development);
    expect(ConfigService.chain.id).toBe('25');
  });

  it('should retrieve the testnet chain id when environment setup as testnet', () => {
    ConfigService.setEnvironment(Environment.testnet);
    expect(stubs.setEnvironment).toBeCalled();
    expect(stubs.setEnvironment).toHaveBeenCalledWith(Environment.testnet);
    expect(ConfigService.chain.id).toBe('338');
  });
});
