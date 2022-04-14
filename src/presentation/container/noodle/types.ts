import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ParamsType} from '@storyboards';

export type NoodleNavigationProps = StackNavigationProp<ParamsType, 'Noodle'>;

export type NoodleRouteProp = RouteProp<ParamsType, 'Noodle'>;

export type NoodleProps = {
  navigation: NoodleNavigationProps;
  route: NoodleRouteProp;
};

export type NoodleReduxSelectionState = {
  // uri: string;
};
