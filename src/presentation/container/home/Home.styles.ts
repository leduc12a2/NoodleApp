import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Fonts, Colors} from '@resources';
import {FONT} from '@assets';
import {width, height} from '@resources';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: width,
    // height: height,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {width: 150, height: 150, top: 20},
  welcomeText: {
    top: 10,
    fontSize: 40,
    fontFamily: FONT.SVN,
    fontWeight: '900',
    color: Colors.RED,
  },
  video: {
    width: width - 40,
    height: 250,
  },
  viewScan: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scan: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  scanText: {
    fontSize: 20,
    fontFamily: FONT.NUNITO,
    fontWeight: 'bold',
    color: Colors.RED,
  },
  viewDeviceScan: {
    width: width,
    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  deviceScan: {
    width: 150,
    height: 150,
  },
  stepScan: {
    position: 'absolute',
    right: '10%',
  },
  step: {
    width: 50,
    height: 50,
  },
});
