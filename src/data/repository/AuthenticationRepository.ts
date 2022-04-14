import {inject, injectable} from 'tsyringe';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {AuthenticationRepository, SignInResult} from '@domain';

import {RemoteAuthenticationDataSource} from '../data-source';

@injectable()
export class CombineAuthenticationRepository
  implements AuthenticationRepository {
  constructor(
    @inject('RemoteAuthenticationDataSource')
    private readonly remoteDataSource: RemoteAuthenticationDataSource,
  ) {}
}
