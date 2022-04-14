import React from 'react';
import {Image, TouchableOpacity, ViewStyle, ImageProps} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
export interface PropsIconImage extends ImageProps {
  size?: number;
  color?: string;
  isTouch?: boolean;
  onPress?: any;
  onPressIn?: any;
  activeOpacity?: any;
  containerStyle?: ViewStyle;
}

export const IconImage: React.FC<PropsIconImage> = (props) => {
  const {
    source,
    style,
    resizeMode,
    size,
    color,
    isTouch,
    onPress,
    activeOpacity,
    containerStyle,
    onPressIn,
  } = props;
  return (
    <TouchableOpacity
      disabled={!isTouch}
      onPressIn={onPressIn}
      onPress={onPress}
      style={containerStyle}
      hitSlop={{top: 5, bottom: 5, right: 5, left: 5}}
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
