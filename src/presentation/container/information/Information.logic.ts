import React, {useEffect, useCallback, useMemo} from 'react';
import {HomeSelector} from './Information.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
import {createSelector} from 'reselect';
import {FlatListProps} from 'react-native';

export const InformationLogic = () => {
  const arr = useMemo(() => Array(13).fill(''), []);
  const dispatch = useDispatch();
  const {} = useSelector(HomeSelector);
  return {
    arr,
    dispatch,
  };
};
