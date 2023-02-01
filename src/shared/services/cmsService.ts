import axios, { AxiosInstance, RawAxiosRequestConfig } from 'axios';
import ConfigService from './configService';

export class CMSService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: ConfigService.urls.cms,
    });
  }

  public reinitialize() {
    this.api = axios.create({
      baseURL: ConfigService.urls.cms,
    });
  }

  public get = async (address: any, config?: RawAxiosRequestConfig) => {
    return this.api.get(address, config);
  };

  public post = async (url: string, data: any, config?: RawAxiosRequestConfig) => {
    return this.api.post(url, data, config);
  };

  public patch = async (url: string, data: any, config?: RawAxiosRequestConfig) => {
    return this.api.patch(url, data, config);
  };

  public delete = async (address: any, config?: RawAxiosRequestConfig) => {
    return this.api.delete(address, config);
  };
}

export default new CMSService();
