import {of, throwError} from 'rxjs';

import {CombineAuthenticationRepository} from '@data';
import {
  MockRemoteAuthenticationDataSource,
  MockLocalAuthenticationDataSource,
} from '@mocks';
import {RemoteException, LocalException} from '@core';

describe('AuthenticationRepository', () => {
  let repository: CombineAuthenticationRepository;
  let localDataSource: MockLocalAuthenticationDataSource;
  let remoteDataSource: MockRemoteAuthenticationDataSource;
  beforeEach(() => {
    localDataSource = new MockLocalAuthenticationDataSource();
    remoteDataSource = new MockRemoteAuthenticationDataSource();
    repository = new CombineAuthenticationRepository(remoteDataSource);
  });

  describe('sign in', () => {
    it('successfully', (done) => {
      remoteDataSource.mockSignInResult = of({data: {token: 'test', user: {}}});
      repository.signIn({}).subscribe({
        next: (result) =>
          expect(result).toStrictEqual({fromLocal: false, token: 'test'}),
        complete: done,
      });
    });

    it('failed', (done) => {
      remoteDataSource.mockSignInResult = throwError(new RemoteException({}));
      repository.signIn({}).subscribe({
        error: (error) => {
          expect(error).toBeInstanceOf(RemoteException);
          done();
        },
      });
    });
  });
});
