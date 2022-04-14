import React from 'react';
import {splashSelector} from './Splash.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
import CodePush from 'react-native-code-push';
import {App} from '@resources';
import {setSplashLoad} from '@shared-state';
import {BuildConfig, env_set} from '@core';

export const splashLogic = () => {
  const dispatch = useDispatch();
  const {mode} = useSelector(splashSelector);
  const [label, setLabel] = React.useState('');
  const [codePushSuccess, setCodePushSuccess] = React.useState(false);

  React.useEffect(() => {
    const deploymentKey = env_set[BuildConfig.env_key].codePush[mode];
    CodePush.sync(
      !!deploymentKey
        ? {
            deploymentKey,
          }
        : {},
      codePushStatusDidChange,
    );
  }, []);

  const codePushStatusDidChange = (syncStatus: number) => {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        setLabel(App.version);
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        setLabel('downloading package.');
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        setLabel('awaiting user action.');
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        setLabel('installing update.');
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        setLabel(App.version);
        setCodePushSuccess(true);
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        setLabel('update cancelled by user.');
        setCodePushSuccess(true);
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        setLabel('update installed and will be applied on restart.');
        setTimeout(() => {
          CodePush.restartApp();
        }, 1000);
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        setLabel('an unknown error occurred.');
        setCodePushSuccess(true);
        break;
      default:
        setLabel(App.version);
        setCodePushSuccess(true);
        break;
    }
  };

  React.useEffect(() => {
    if (codePushSuccess) {
      dispatch(setSplashLoad());
    }
  }, [codePushSuccess]);

  return {
    label,
    mode,
  };
};
