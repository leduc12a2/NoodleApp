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
    ...StyleSheet.absoluteFillObject,
    flex: 1,
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
  noCup: {
    top: 20,
    width: (width / 100) * 85,
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: FONT.SVN,
    fontWeight: '900',
    color: Colors.RED,
  },
  imgnoCup: {
    width: (width / 100) * 80,
    height: 300,
  },
});
