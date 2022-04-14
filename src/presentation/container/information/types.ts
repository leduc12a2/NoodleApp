import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ParamsType} from '@storyboards';

export type InformationNavigationProps = StackNavigationProp<
  ParamsType,
  'Information'
>;

export type InformationRouteProp = RouteProp<ParamsType, 'Information'>;

export type InformationProps = {
  navigation: InformationNavigationProps;
  route: InformationRouteProp;
};

export type InformationReduxSelectionState = {
  // uri: string;
};
