import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, } from "axios";


export class BaseHttpClient {
  private http: AxiosInstance;

  constructor(baseUri: string) {
    this.http = axios.create({
      baseURL: baseUri,
      timeout: 30000,
      responseType: 'json',
    })

    this.http.interceptors.response.use(this.handleSucess, this.handleError);
  }

  public async get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return this.http.get<T>(url, options).then(this.getData);
  }

  public getResponse<T>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.get<T>(url, options);
  }

  public postResponse<T>(url: string, data: unknown, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.post<T>(url, data, options)
  }

  public async post<T>(url: string, data?: unknown, options?: AxiosRequestConfig): Promise<T> {
    return this.http.post<T>(url, data, options).then(this.getData);
  }

  public createAuthHeader = (token?: string): AxiosRequestConfig => {
    if (!token) {
      throw new Error("The provided token is null");
    }

    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }

  private handleSucess(response: AxiosResponse): AxiosResponse {
    return response;
  }

  private handleError(error: AxiosError): Promise<AxiosError> {
    if (error && error.response) {
      const { data } = error.response;
      if (!data) return Promise.reject(data);
    }
    return Promise.reject(error);
  }

  private async getData<T>(response: AxiosResponse<T>): Promise<T> {
    return response.data;
  }

}