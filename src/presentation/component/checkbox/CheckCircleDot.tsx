import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Animated from 'react-native-animatable';
export const CheckCircleDot = (props: any) => {
  const {isChecked, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {borderColor: isChecked ? '#7c1F8C' : '#000000b3'},
      ]}>
      {isChecked && (
        <Animated.View
          useNativeDriver={true}
          animation={'rubberBand'}
          duration={1000}>
          <View style={styles.checkedCircle} />
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: wp(4),
    height: wp(4),
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    backgroundColor: '#7c1F8C',
    width: wp(2.5),
    height: wp(2.5),
    borderRadius: wp(1.25),
  },
});
