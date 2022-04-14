/**
 * @format
 */
import React from 'react';
import 'reflect-metadata';
import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import {
  registerDependencies,
  registerFlyValue,
  container,
  AppDependencies,
} from '@di';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import {load} from './src/bootstrap';
registerDependencies();
// registerFlyValue();

const onBeforeLift = async () => await load();

const root = () => {
  const {store, persistor} = container.resolve(AppDependencies.StoreContainer);
  return (
    <Provider store={store}>
      <PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => root);
LogBox.ignoreAllLogs(true);