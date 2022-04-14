import React, {useEffect} from 'react';
import {ScanSelector} from './Scan.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
import {createSelector} from 'reselect';

export const ScanLogic = () => {
  const dispatch = useDispatch();
  const {} = useSelector(ScanSelector);
  return {};
};
