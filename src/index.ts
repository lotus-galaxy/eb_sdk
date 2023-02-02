import { Environment } from './shared/config';

import { ListingModule } from './modules/listing';

import { ConfigService, AuthService, CMSService, APIService } from './shared/services';

import { UserProvider } from './shared/types';

type Env = 'mainnet' | 'testnet'

interface SDKConfig {
  environment: Env;
}

export class EbisusBaySdk extends ListingModule {
  constructor(config: SDKConfig = { environment: 'mainnet' }) {
    super();

    if (config.environment) {
      ConfigService.setEnvironment(config.environment === 'mainnet'? Environment.production : Environment.testnet);
      CMSService.reinitialize();
      APIService.reinitialize();
    }
  }

  public setProvider(address: string, provider: UserProvider) {
    AuthService.init(address, provider);
  }
}
