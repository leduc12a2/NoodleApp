import * as React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import {RootStoreState} from '@shared-state';
import {
  SplashScreen,
  HomeScreen,
  NoodleScreen,
  ScanScreen,
  InformationScreen,
} from '@containers';

enableScreens();
const Stack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Scan">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Scan" component={ScanScreen} />
      <Stack.Screen name="Noodle" component={NoodleScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
    </MainStack.Navigator>
  );
}

export const RootNavigator: React.FC = () => {
  const splashLoad = useSelector(
    (state: RootStoreState) => state.systems.splashLoad,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          !splashLoad ? (
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          ) : (
            <Stack.Screen name="Main" component={MainStackNavigator} />
          )

          // <Stack.Screen name="Noodle" component={NoodleScreen} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};
