import React, {useEffect, useCallback, useMemo} from 'react';
import {HomeSelector} from './Noodle.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
import {createSelector} from 'reselect';
import {FlatListProps} from 'react-native';

export const NoodleLogic = () => {
  const arr = useMemo(() => Array(13).fill(''), []);
  const dispatch = useDispatch();
  const {} = useSelector(HomeSelector);
  return {
    arr,
    dispatch,
  };
};
