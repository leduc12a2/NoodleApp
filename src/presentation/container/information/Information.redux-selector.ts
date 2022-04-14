import {Selector} from 'react-redux';
import {RootStoreState} from '@shared-state';
import {InformationReduxSelectionState} from './types';

export const HomeSelector: Selector<
  RootStoreState,
  InformationReduxSelectionState
> = (state) => {
  return {
    // uri: state.authentication.uri,
  };
};
