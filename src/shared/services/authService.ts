import { UserProvider } from '../types';

class AuthService {
  private walletAddress?: string;
  private provider?: UserProvider;
  private signedMessage?: string;

  public init(walletAddress: string, provider: UserProvider) {
    this.walletAddress = walletAddress;
    this.provider = provider;
    this.signedMessage =
      "Welcome to Ebisu's Bay!\n\n" +
      "Click to sign in and accept the Ebisu's Bay Terms of Service: https://cdn.ebisusbay.com/terms-of-service.html\n\n" +
      'This request will not trigger a blockchain transaction or cost any gas fees.\n\n' +
      `Wallet address:\n${walletAddress}`;
  }

  public getWalletAddress() {
    return this.walletAddress!;
  }

  public async getSigner() {
    const signer = this.provider!.getSigner();

    return signer.signMessage(this.signedMessage!);
  }

  public getProvider() {
    return this.provider;
  }
}

export default new AuthService();
