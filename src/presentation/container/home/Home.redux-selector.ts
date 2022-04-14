import {Selector} from 'react-redux';
import {RootStoreState} from '@shared-state';
import {HomeReduxSelectionState} from './types';

export const HomeSelector: Selector<RootStoreState, HomeReduxSelectionState> = (
  state,
) => {
  return {
    accessToken: state?.authentication?.accessToken,
  };
};
