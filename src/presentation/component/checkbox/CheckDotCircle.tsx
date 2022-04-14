import React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';
import * as Animated from 'react-native-animatable';
interface Props {
  borderColorActive?: string;
  borderColor?: string;
  colorDot?: string;
  size?: number;
  style?: ViewStyle;
  isChecked: boolean;
}
export const CheckDotCircle = (props: Props) => {
  const {
    borderColorActive,
    borderColor,
    colorDot,
    size,
    style,
    isChecked,
  } = props;

  return (
    <View style={style}>
      <View
        style={[
          styles.containerRadio,
          !!size && {width: size, height: size, borderRadius: size / 2},
          {borderColor: borderColor || '#fff'},
          isChecked && {borderColor: borderColorActive || '#fff'},
        ]}>
        {isChecked && (
          <Animated.View
            useNativeDriver={true}
            animation={'rubberBand'}
            duration={1000}>
            <View
              style={[
                styles.dot,
                !!size && {
                  width: size / 2,
                  height: size / 2,
                  borderRadius: size / 4,
                },
                {backgroundColor: colorDot || 'yellow'},
              ]}
            />
          </Animated.View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRadio: {
    borderRadius: 10,
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'yellow',
  },
});
