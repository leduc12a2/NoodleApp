import React from 'react';
import {
  Image,
  ImageProps,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
export interface PropsIconImageCircle extends ImageProps {
  size?: number;
  sizeCircle?: number;
  color?: string;
  isTouch?: boolean;
  onPress?: any;
  activeOpacity?: any;
  containerStyle?: ViewStyle;
  hitSlop?: {top?: number; bottom?: number; left?: number; right?: number};
}

export const IconImageCircle: React.FC<PropsIconImageCircle> = (props) => {
  const {
    source,
    style,
    resizeMode,
    size,
    sizeCircle,
    color,
    isTouch,
    onPress,
    activeOpacity,
    containerStyle,
  } = props;
  return (
    <TouchableOpacity
      disabled={!isTouch}
      onPress={onPress}
      hitSlop={props.hitSlop}
      style={[
        styles.containerDefault,
        !!sizeCircle && {
          width: sizeCircle,
          height: sizeCircle,
          borderRadius: sizeCircle / 2,
        },
        containerStyle,
      ]}
      activeOpacity={activeOpacity}>
      <Image
        resizeMode={resizeMode || 'contain'}
        source={source}
        style={[
          {width: size || wp(5), height: size || wp(5), tintColor: color},
          style,
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerDefault: {
    backgroundColor: '#fff',
    width: wp(9),
    height: wp(9),
    borderRadius: wp(4.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
