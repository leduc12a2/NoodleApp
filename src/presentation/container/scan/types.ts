import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {ParamsType} from '@storyboards';

export type ScanNavigationProps = StackNavigationProp<ParamsType, 'Scan'>;

export type ScanRouteProp = RouteProp<ParamsType, 'Scan'>;

export type ScanProps = {
  navigation: ScanNavigationProps;
  route: ScanRouteProp;
};

export type ScanReduxSelectionState = {};
