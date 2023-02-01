import { ethers } from 'ethers';
import { AuthService, ConfigService } from '../../../shared/services';

describe('AuthService', () => {
  let stubs: any = {};
  const userAddress = '0xdf2d986f951f640ed8cc304af14df798ae953b94';
  const provider = new ethers.providers.JsonRpcProvider({
    url: ConfigService.rpc.read!,
    timeout: 5000,
  });

  beforeEach(() => {
    stubs.init = jest.spyOn(AuthService, 'init');
    stubs.getWalletAddress = jest.spyOn(AuthService, 'getWalletAddress');
    stubs.getSigner = jest.spyOn(AuthService, 'getSigner');
    stubs.getProvider = jest.spyOn(AuthService, 'getProvider');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getWalletAddress', () => {
    AuthService.init(userAddress, provider);
    expect(AuthService.getWalletAddress()).toBe(userAddress);
  });

  it('getProvider', () => {
    AuthService.init(userAddress, provider);
    expect(AuthService.getProvider()).toBe(provider);
  });
});
