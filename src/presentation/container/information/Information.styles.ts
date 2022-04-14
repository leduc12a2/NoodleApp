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
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {width: 150, height: 150, top: 20},
  welcomeText: {
    top: 10,
    width: (width / 100) * 90,
    fontSize: 28,
    fontFamily: FONT.SVN,
    fontWeight: '900',
    color: Colors.RED,
    textAlign: 'center',
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
  styleText: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: FONT.NUNITO,
  },
  viewBtnGetNoodles: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGetnoodles: {
    width: (width / 100) * 80,
    height: 150,
  },
  totalCup: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: FONT.PAYTONT_ONE,
    color: Colors.RED,
  },
  subtotalCup: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: FONT.PAYTONT_ONE,
    color: '#9C6666',
  },
  doneImg: {
    marginTop: 20,
    width: (width / 100) * 60,
    height: 200,
  },
  txtenjoy: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: FONT.PAYTONT_ONE,
    color: '#C71A1A',
    marginRight: 10,
  },
  timImg: {
    width: 30,
    height: 30,
  },
});
