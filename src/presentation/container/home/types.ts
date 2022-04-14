import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ParamsType} from '@storyboards';

export type HomeNavigationProps = StackNavigationProp<ParamsType, 'Home'>;

export type HomeRouteProp = RouteProp<ParamsType, 'Home'>;

export type HomeProps = {
  navigation: HomeNavigationProps;
  route: HomeRouteProp;
};

export type HomeReduxSelectionState = {
  accessToken?: string;
};
