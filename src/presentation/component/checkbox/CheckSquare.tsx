import React, {PureComponent} from 'react';
import {IconSVG} from '../icon';
import {View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
interface Props {
  size: number;
  isChecked: boolean;
  backgroundColor?: string[];
}
export class CheckSquare extends PureComponent<Props> {
  static defaultProps = {
    size: wp('6'),
  };
  render() {
    const {isChecked, size} = this.props;

    return (
      <View style={{width: size, height: size, justifyContent: 'center'}}>
        <IconSVG
          name={isChecked ? 'checkbox-checked' : 'checkbox-unchecked'}
          color={isChecked ? '#FBB811' : '#fff'}
          size={(size * 2) / 3}
        />
      </View>
    );
  }
}
