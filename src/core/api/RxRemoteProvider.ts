import { RootStoreState } from '@shared-state';
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import {Observable, Observer} from 'rxjs';
import {RemoteException} from '../error';
import { AnyAction, Store } from 'redux';

export interface RxRemoteProvider {
  /**
   * @summary perform @POST request with config
   * @param url
   * @param data
   *
   * @returns Either Axios response with generic data: T or @RemoteException if failed
   */
  post<T>(url: string, data: any): Observable<AxiosResponse<T>>;

  /**
   * @summary perform @GET request with config
   * @param url
   *
   * @returns Either Axios response with generic data: T or @RemoteException if failed
   */
  get<T>(url: string, params?: any): Observable<AxiosResponse<T>>;

  /**
   * @summary perform @PUT request with config
   * @param url
   * @param data
   *
   * @returns Either Axios response with generic data: T or @RemoteException if failed
   */
  put<T>(url: string, data: any): Observable<AxiosResponse<T>>;

  /**
   * @summary perform @DELETE request with config
   * @param url
   *
   * @returns Either Axios response with generic data: T or @RemoteException if failed
   */
  delete<T>(url: string): Observable<AxiosResponse<T>>;
}

export class RxAxiosProviderException extends RemoteException<AxiosError> {}

export class BearerAuthorizationRxAxiosProvider<Result = any>
  implements RxRemoteProvider {
  private readonly axiosInstance: AxiosInstance;

  private token?: string;
  private store?: Store<any, AnyAction>;
  constructor(config: AxiosRequestConfig,mainStore?: Store<RootStoreState, AnyAction>) {
    this.axiosInstance = axios.create(config);
    this.store = mainStore;
    mainStore?.subscribe(() => {
      const state = mainStore?.getState();

      if (state.authentication?.accessToken != this.token) {
        this.token = state?.authentication?.accessToken;
      }
    });
  }

  request<T>(requestConfig: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return new Observable((observer: Observer<AxiosResponse<T>>) => {
      if (!!this.token) {
        //console.log('Token',this.token)
        requestConfig.headers = {
          ...requestConfig.headers,
          Authorization: `Bearer ${this.token}`,
        };
      }
      console.log('request', requestConfig);
      const request = this.axiosInstance.request(requestConfig);
      request
        .then((result) => {
          console.log('result axiosInstance', result);
          observer.next(result);
          observer.complete();
        })
        .catch((error) => {
          console.log('axiosInstance error', error);
          observer.error(error);
        });
    });
  }

  post<T>(url: string, data: any): Observable<AxiosResponse<T>> {
    return this.request({
      method: 'POST',
      data,
      url,
    });
  }
  get<T>(url: string, params: any): Observable<AxiosResponse<T>> {
    return this.request({
      method: 'GET',
      url,
      params,
    });
  }
  put<T>(url: string, data: any): Observable<AxiosResponse<T>> {
    return this.request({
      method: 'PUT',
      data,
      url,
    });
  }
  delete<T>(url: string): Observable<AxiosResponse<T>> {
    return this.request({
      method: 'DELETE',
      url,
    });
  }
}
