import {container} from 'tsyringe';
import {ApiAuthenticationDataSource} from '@data';
import {SignInUseCase} from '@domain';
import {BearerAuthorizationRxAxiosProvider, BuildConfig,env_set} from '@core';
import {AppDependencies} from './type';
import {StoreContainer} from '@shared-state';
const headers = {
  Accept: 'application/json',
};
export function registerDataDependencies(mainStore?: StoreContainer) {
  container.register(AppDependencies.ApiProvider, {
    useValue: new BearerAuthorizationRxAxiosProvider({
      baseURL: env_set[BuildConfig.env_key].ApiUrl,
      headers,
    },
    mainStore?.store,
    ),
  });
  container.register(AppDependencies.RemoteAuthenticationDataSource, {
    useClass: ApiAuthenticationDataSource,
  });

  container.register(AppDependencies.SignInUseCase, {
    useClass: SignInUseCase,
  });
}
