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
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  qrScan: {
    justifyContent: 'center',
    height: '60%',
  },
  regionScan: {
    width: '50%',
    height: '40%',
    position: 'absolute',
    top: '30%',
    left: '25%',
    borderWidth: 1,
    opacity: 0.7,
    borderColor: 'blue',
  },
  resultScan: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  resultText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: FONT.SVN,
    color: 'white',
  },
  logo: {width: 150, height: 150, top: 20},
  welcomeText: {
    top: 10,
    fontSize: 40,
    fontFamily: FONT.SVN,
    fontWeight: '900',
    color: Colors.RED,
  },
  suberror: {
    fontSize: 15,
    top: 10,
    fontFamily: FONT.SVN,
    fontWeight: '900',
    color: Colors.RED,
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
    position: 'absolute',
    bottom: 40,
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
  viewScanAgain: {
    top: 20,
    width: 200,
    alignItems: 'center',
    // height: 100,
    padding: 20,
    backgroundColor: '#D86643',
    borderRadius: 10,
  },
  textScanAgain: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: FONT.NUNITO,
  },
  imgscanerr: {
    top: 20,
    width: 200,
    height: 200,
  },
});
