import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './Noodle.styles';
import {NoodleProps} from './types';
import {NoodleLogic} from './Noodle.logic';
import {translate} from '@helpers';
import {IconSVG} from '@components';
import {width, height} from '@resources';
import {FONT} from '@assets';
import {bg, logo, noCup} from '@assets';

export const NoodleScreen: React.FC<NoodleProps> = (props) => {
  const {} = props;
  const {} = NoodleLogic();

  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="center" />
      <Text style={styles.welcomeText}>{translate('outNoodles')}</Text>
      <Text style={styles.noCup}>{translate('noCup')}</Text>
      <Image source={noCup} style={styles.noCup} resizeMode="center" />
    </ImageBackground>
  );
};
