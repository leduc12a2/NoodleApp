/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {StatusBar} from 'react-native';
import {RootNavigator} from '@presentation';
import CodePush from 'react-native-code-push';
import {AppLogic} from './src/bootstrap';
const AppScreen = () => {
  AppLogic();
  return (
    <>
      <StatusBar hidden={true} />
      <RootNavigator />
    </>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.MANUAL,
})(AppScreen);
