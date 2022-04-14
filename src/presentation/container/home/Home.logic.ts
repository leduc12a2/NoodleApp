import React, {useEffect} from 'react';
import {HomeSelector} from './Home.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
import {createSelector} from 'reselect';

export const HomeLogic = () => {
  const dispatch = useDispatch();
  const {} = useSelector(HomeSelector);
  const onPressScan = (props: any) => {
    props.navigate('Scan');
  };
  return {
    onPressScan,
  };
};
