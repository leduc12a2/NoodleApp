import React, {useEffect, useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ImageBackground,
  View,
  Image,
} from 'react-native';
import {styles} from './Scan.styles';
import {ScanProps} from './types';
import {ScanLogic} from './Scan.logic';
import {translate} from '@helpers';
import {IconSVG} from '@components';
import {bg, logo, video, scan, deviceScan, step, imgscanerr} from '@assets';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

export const ScanScreen: React.FC<ScanProps> = (props) => {
  const {navigation, route} = props;
  const [error, setError] = useState(false);
  const [resultScan, setResultScan] = useState();

  const {} = ScanLogic();
  // useEffect(() => {
  //   const back = setTimeout(() => {
  //     setError(true);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(back);
  //   };
  // }, []);
  const onSuccess = (e: any) => {
    setResultScan(e.data);
    console.log(e);
    // Linking.openURL(e.data).catch((err) =>
    //   console.error('An error occured', err),
    // );
  };

  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
      {!error ? (
        <>
          <View style={styles.qrScan}>
            <QRCodeScanner
              onRead={onSuccess}
              reactivate={true}
              reactivateTimeout={5000}
              // flashMode={RNCamera.Constants.FlashMode.off}
            />
            <View style={styles.regionScan}></View>
          </View>
          <View style={styles.resultScan}>
            <Text style={styles.resultText}>{resultScan}</Text>
          </View>
        </>
      ) : (
        <>
          <Image source={logo} style={styles.logo} resizeMode="center" />
          <Text style={styles.welcomeText}>{translate('error')}</Text>
          <Text style={styles.suberror}>{translate('subErrorScan')}</Text>
          <TouchableOpacity style={styles.viewScanAgain}>
            <Text style={styles.textScanAgain}>{translate('scanAgain')}</Text>
          </TouchableOpacity>
          <Image
            source={imgscanerr}
            style={styles.imgscanerr}
            resizeMode="center"
          />
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
            <TouchableOpacity style={styles.stepScan}>
              <Image source={step} style={styles.step} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </ImageBackground>
  );
};
