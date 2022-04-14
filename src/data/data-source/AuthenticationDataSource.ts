import {injectable, inject} from 'tsyringe';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {RxRemoteProvider} from '@core';

import {SignInResponseData, SignInRequestData, ApiResult} from '../model';

export interface RemoteAuthenticationDataSource {
  /**
   * @method signIn
   *
   * @description Sign in user with phone
   */
}

@injectable()
export class ApiAuthenticationDataSource
  implements RemoteAuthenticationDataSource {
  constructor(
    @inject('ApiProvider')
    private readonly provider: RxRemoteProvider,
  ) {}
}
