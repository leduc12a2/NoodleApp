import {createStore, applyMiddleware, Action, compose} from 'redux';
import {BehaviorSubject} from 'rxjs';
import {StoreContainer, RootStoreState} from './types';
import {createReducerManager} from './reducer';
import {createEpicManager} from './epic';
import {authenticationEpic} from './epics';
import {systemsReducer, authenticationReducer} from './reducers';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {createWhitelistFilter} from 'redux-persist-transform-filter';

export function configureStore(): StoreContainer {
  const reducerManager = createReducerManager({
    systems: systemsReducer,
    authentication: authenticationReducer,
  });
  const {rootEpic, epicMiddleware, epic$, addEpic} = createEpicManager(
    {},
    authenticationEpic,
  );

  // Create a store with the root reducer function being the one exposed by the manager.
  const systems = createWhitelistFilter('systems', ['language', 'mode']);
  const persistConfig = {
    key: 'root',
    blacklist: [],
    transforms: [systems],
    storage: AsyncStorage,
    timeout: 0,
  };
  const action$ = new BehaviorSubject<Action>({type: 'init'});
  const reducer = (
    state: RootStoreState | undefined,
    action: Action<string>,
  ) => {
    action$.next(action);
    return reducerManager.reduce(state, action);
  };
  const persistedReducer: any = persistReducer(persistConfig, reducer);
  const store = createStore<RootStoreState, Action<string>, any, any>(
    persistedReducer,
    applyMiddleware(epicMiddleware, logger),
  );
  epicMiddleware.run(rootEpic);
  const persistor = persistStore(store);

  return {
    reducerManager,
    store,
    epic$,
    action$,
    addEpic,
    persistor,
  };
}
