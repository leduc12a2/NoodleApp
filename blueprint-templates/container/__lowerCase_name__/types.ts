import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ParamsType} from '@storyboards';

export type {{name}}NavigationProps = StackNavigationProp<
  ParamsType,
  '{{name}}'
>;

export type {{name}}RouteProp = RouteProp<ParamsType, '{{name}}'>;

export type {{name}}Props = {
  navigation: {{name}}NavigationProps;
  route: {{name}}RouteProp;
};

export type {{name}}ReduxSelectionState = {};