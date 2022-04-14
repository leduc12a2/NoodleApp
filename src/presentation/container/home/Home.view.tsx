import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {styles} from './Home.styles';
import {HomeProps} from './types';
import {HomeLogic} from './Home.logic';
import {translate} from '@helpers';
import {IconSVG} from '@components';
import {bg, logo, video, scan, deviceScan, step} from '@assets';

export const HomeScreen: React.FC<HomeProps> = (props) => {
  const {navigation, route} = props;
  const {onPressScan} = HomeLogic();

  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="center" />
      <Text style={styles.welcomeText}>{translate('welcome')}</Text>
      <Image source={video} style={styles.video} resizeMode="contain" />
      <View style={styles.viewScan}>
        <Image source={scan} style={styles.scan} resizeMode="contain" />
        <Text style={styles.scanText}>{translate('scan')}</Text>
      </View>
      <View style={styles.viewDeviceScan}>
        <Image
          source={deviceScan}
          style={styles.deviceScan}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.stepScan}
          onPress={() => onPressScan(navigation)}>
          <Image source={step} style={styles.step} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
