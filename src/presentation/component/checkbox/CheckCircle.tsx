import React, {PureComponent} from 'react';
import {IconSVG} from '../icon';
import {StyleSheet, Text, View} from 'react-native';
import * as Animated from 'react-native-animatable';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
interface Props {
  size: number;
  isChecked: boolean;
  backgroundColor?: string[];
  field: any;
  form: any;
}
export class CheckCircle extends PureComponent<Props> {
  static defaultProps = {
    size: wp('6'),
  };
  render() {
    const {isChecked, size, backgroundColor} = this.props;
    return (
      <LinearGradient
        style={[
          styles.contentTick,
          {width: size, height: size, borderRadius: size / 2},
          !isChecked && styles.border,
        ]}
        colors={
          isChecked
            ? backgroundColor || ['#AAFA6B', '#459B02']
            : ['#fff', '#fff']
        }>
        {isChecked && (
          <Animated.View
            useNativeDriver={true}
            animation={'rubberBand'}
            duration={1000}>
            <IconSVG name={'tick'} color={'#fff'} size={(size * 2) / 3} />
          </Animated.View>
        )}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  contentTick: {
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 5,
    overflow: 'hidden',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#d2d6dc',
  },
  border: {borderWidth: 2, borderColor: '#BCBEC0'},
});
