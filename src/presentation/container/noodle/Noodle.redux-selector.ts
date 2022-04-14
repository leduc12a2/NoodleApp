import {Selector} from 'react-redux';
import {RootStoreState} from '@shared-state';
import {NoodleReduxSelectionState} from './types';

export const HomeSelector: Selector<
  RootStoreState,
  NoodleReduxSelectionState
> = (state) => {
  return {
    // uri: state.authentication.uri,
  };
};
