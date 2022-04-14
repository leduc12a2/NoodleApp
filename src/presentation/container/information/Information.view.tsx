import React, {useMemo, useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {styles} from './Information.styles';
import {InformationProps} from './types';
import {InformationLogic} from './Information.logic';
import {translate} from '@helpers';
import {IconSVG} from '@components';
import {width, height} from '@resources';
import {FONT} from '@assets';
import {
  bg,
  logo,
  bgInfo,
  defautAvatar,
  btnGetnoodles,
  cup,
  bgCup,
  cupAvailable,
  cup2,
  cup3,
  btnNextMonth,
  btnbackToHome,
  doneImg,
  tim,
} from '@assets';

type CardInformation = {
  avatar?: string;
  fullName?: string;
  birthDate?: string;
  gender?: string;
  department?: string;
};

export const InformationScreen: React.FC<InformationProps> = (props) => {
  const {} = props;
  const {} = InformationLogic();
  const [done, setDone] = useState(false);
  const InformationCard = ({
    avatar,
    fullName = 'Alice Mie',
    birthDate = '12/10/1999',
    gender = 'Female',
    department = 'Design',
  }: CardInformation) => {
    return (
      <>
        <ImageBackground
          source={bgInfo}
          resizeMode="contain"
          style={{
            width: (width / 100) * 90,
            height: 150,
            marginTop: 20,
          }}>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 100,
                height: 100,
                // backgroundColor: 'red',
                borderRadius: 60,
              }}>
              <Image
                source={avatar ? avatar : defautAvatar}
                style={{width: '100%', height: '100%'}}
                resizeMode="center"
              />
            </View>
            <View
              style={{
                // backgroundColor: 'red',
                width: 100,
                height: 100,
                // justifyContent: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.styleText}>{translate('fullName')}</Text>
              <Text style={styles.styleText}>{translate('birthDate')}</Text>
              <Text style={styles.styleText}>{translate('gender')}</Text>
              <Text style={styles.styleText}>{translate('department')}</Text>
            </View>
            <View
              style={{
                width: 100,
                height: 100,
                justifyContent: 'space-between',
              }}>
              <Text style={[styles.styleText, {fontWeight: '900'}]}>
                {fullName}
              </Text>
              <Text style={[styles.styleText, {fontWeight: '900'}]}>
                {birthDate}
              </Text>
              <Text style={[styles.styleText, {fontWeight: '900'}]}>
                {gender}
              </Text>
              <Text style={[styles.styleText, {fontWeight: '900'}]}>
                {department}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </>
    );
  };
  useEffect(() => {
    const tm = setTimeout(() => {
      setDone(!done);
      console.log('object');
    }, 3000);

    return () => {
      clearTimeout(tm);
    };
  }, []);

  const listNoodle = useMemo(() => {
    return [
      {
        id: 1,
        isAvailable: false,
        cup: cup,
        mineUser: true,
      },
      {
        id: 2,
        isAvailable: true,
        cup: cup2,
        mineUser: false,
      },
      {
        id: 3,
        isAvailable: true,
        cup: cup3,
        mineUser: false,
      },
    ];
  }, []);

  const lengthCup = listNoodle.reduce(
    (previousValue, currentValue) =>
      currentValue.mineUser ? previousValue + 1 : previousValue,
    0,
  );

  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="center" />
      {!done ? (
        <>
          <Text style={styles.welcomeText}>{translate('information')}</Text>
          <InformationCard />
          <View
            style={{
              width: (width / 100) * 90,
              height: 150,
              flexDirection: 'row',
              justifyContent: 'space-between',
              // backgroundColor: 'red',
            }}>
            {listNoodle?.map(({id, isAvailable, cup, mineUser}) => {
              return (
                <View
                  key={id}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode="cover"
                    source={isAvailable ? cupAvailable : cup}
                    style={{width: '60%', height: '80%', zIndex: 1}}
                  />
                  {isAvailable ? (
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        fontSize: 15,
                        color: '#A09A9A',
                      }}>
                      {translate('unavailable')}
                    </Text>
                  ) : null}

                  {mineUser ? (
                    <Image
                      resizeMode="center"
                      source={bgCup}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  ) : null}
                </View>
              );
            })}
          </View>
          <Text style={styles.totalCup}>
            {`${lengthCup} `}
            <Text style={styles.subtotalCup}>{translate('moreCup')}</Text>
          </Text>

          <TouchableOpacity style={styles.viewBtnGetNoodles}>
            {lengthCup ? (
              <Image
                source={btnGetnoodles}
                style={styles.btnGetnoodles}
                resizeMode="center"
              />
            ) : (
              <Image
                source={btnNextMonth}
                style={styles.btnGetnoodles}
                resizeMode="center"
              />
            )}
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.welcomeText}>{translate('done')}</Text>
          <Image source={doneImg} style={styles.doneImg} resizeMode="center" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              top: 30,
            }}>
            <Text style={styles.txtenjoy}>{translate('enjoy')}</Text>
            <Image source={tim} style={styles.timImg} resizeMode="center" />
          </View>
          <TouchableOpacity style={styles.viewBtnGetNoodles}>
            <Image
              source={btnbackToHome}
              style={styles.btnGetnoodles}
              resizeMode="center"
            />
          </TouchableOpacity>
        </>
      )}
    </ImageBackground>
  );
};
