import * as _ from 'lodash';
import { Contracts, Chain, Urls, Rpc } from '../types';
import { configData, Environment } from '../config';

export class ConfigService {
  private environment: Environment;

  constructor(environment: Environment = Environment.development) {
    this.environment = environment;
  }

  public setEnvironment(environment: Environment) {
    this.environment = environment;
  }

  public get contracts(): Contracts {
    return configData[this.environment].contracts!;
  }

  public get urls(): Urls {
    return configData[this.environment].urls!;
  }

  public get rpc(): Rpc {
    return configData[this.environment].rpc!;
  }

  public get chain(): Chain {
    return configData[this.environment].chain!;
  }
}

export default new ConfigService();
