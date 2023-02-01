import axios, { AxiosInstance, RawAxiosRequestConfig } from 'axios';
import ConfigService from './configService';

export class APIService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: ConfigService.urls.api,
    });
  }

  public reinitialize() {
    this.api = axios.create({
      baseURL: ConfigService.urls.api,
    });
  }

  public get = async (url: string, config?: RawAxiosRequestConfig) => {
    return this.api.get(url, config);
  };

  public post = async (url: string, data: any, config?: RawAxiosRequestConfig) => {
    return this.api.post(url, data, config);
  };

  public patch = async (url: string, data: any, config?: RawAxiosRequestConfig) => {
    return this.api.patch(url, data, config);
  };

  public delete = async (url: string, config?: RawAxiosRequestConfig) => {
    return this.api.delete(url, config);
  };
}

export default new APIService();
