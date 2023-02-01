import { Environment } from './shared/config';

import { ListingModule } from './modules/listing';

import { ConfigService, AuthService, CMSService, APIService } from './shared/services';

import { UserProvider } from './shared/types';

interface SDKConfig {
  environment: Environment;
}

export class EbisusBaySdk extends ListingModule {
  constructor(config: SDKConfig = { environment: Environment.production }) {
    super();

    if (config.environment) {
      ConfigService.setEnvironment(config.environment);
      CMSService.reinitialize();
      APIService.reinitialize();
    }
  }

  public setProvider(address: string, provider: UserProvider) {
    AuthService.init(address, provider);
  }
}
