export enum Environment {
  production = 'production',
  testnet = 'testnet',
  development = 'development',
}

export interface Urls {
  api?: string;
  app?: string;
  cdn?: string;
  subgraph?: string;
  cms?: string;
  explorer?: string;
}

export interface Chain {
  name?: string;
  id?: string;
  symbol?: string;
}

export interface Contracts {
  membership: string;
  auction: string;
  market: string;
  stake: string;
  offer: string;
  madAuction: string;
  slothtyRugsurance: string;
  bundle: string;
  cnsusd: string;
  gaslessListing?: string;
}

export interface Rpc {
  read?: string;
  write?: string;
}

export interface EnvironmentStructure {
  chain?: Chain;
  urls?: Urls;
  rpc?: Rpc;
  contracts?: Contracts;
}

export interface ConfigData {
  [Environment.production]: EnvironmentStructure;
  [Environment.development]: EnvironmentStructure;
  [Environment.testnet]: EnvironmentStructure;
}
