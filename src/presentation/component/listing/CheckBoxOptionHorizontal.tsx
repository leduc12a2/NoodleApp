import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CheckCircleDot} from '../checkbox';
export const CheckBoxOptionHorizontal = (props: any) => {
  const {
    data,
    title,
    field: {name, value},
    form: {setFieldValue},
  } = props;

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.contentDataStyle}>
        {data?.map((it: any, index: number) => {
          return (
            <Ripple
              onPress={() => setFieldValue(name, it.type)}
              key={String(index)}
              style={[styles.viewRowNormal]}>
              <Text style={styles.titleSection}>{it?.title}</Text>
              <CheckCircleDot isChecked={it.type == value} />
            </Ripple>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  title: {
    color: '#000',
    marginRight: wp(2),
    fontSize: wp(3.5),
    fontWeight: '700',
    flex: 2.5,
  },
  viewRowNormal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp(3),
    marginBottom: hp(2),
  },
  titleSection: {
    fontSize: wp(3),
    marginRight: wp(1),
  },
  contentDataStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 7.5,
    height: '100%',
  },
});
