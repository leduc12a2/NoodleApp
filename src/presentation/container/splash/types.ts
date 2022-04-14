import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ParamsType} from '@storyboards';
import {ModeType} from '@shared-state';
export type SplashNavigationProps = StackNavigationProp<ParamsType, 'Splash'>;

export type SplashRouteProp = RouteProp<ParamsType, 'Splash'>;

export type SplashProps = {
  navigation: SplashNavigationProps;
  route: SplashRouteProp;
};

export type SplashReduxSelectionState = {
  mode: ModeType;
};
