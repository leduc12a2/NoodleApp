/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import _Modal from 'react-native-modal';

enum positionProps {
  top = 'flex-start',
  center = 'center',
  bottom = 'flex-end',
}
interface Props {
  isOpen: boolean;
  position?: keyof typeof positionProps;
  onRequestClose?: () => void;
  pressOutSideClose?: boolean;
  coverScreen?: boolean;
  style?: any;
  hasBackdrop?: any;
}

export class Modal extends Component<Props, any> {
  view: any;
  constructor(props: any) {
    super(props);
  }
  onTouchOutSide = () => {
    const {pressOutSideClose, onRequestClose} = this.props;
    if (pressOutSideClose) {
      onRequestClose && onRequestClose();
    }
  };

  render() {
    const {
      position,
      isOpen,
      children,
      onRequestClose,
      coverScreen,
      style,
      hasBackdrop,
    } = this.props;
    return (
      <_Modal
        isVisible={isOpen}
        style={[{margin: 0}, style]}
        avoidKeyboard={true}
        useNativeDriver={Platform.OS == 'ios' ? false : true}
        animationInTiming={400}
        animationOutTiming={400}
        coverScreen={coverScreen}
        backdropTransitionOutTiming={0}
        onModalHide={onRequestClose}
        onBackdropPress={this.onTouchOutSide}
        onBackButtonPress={onRequestClose}
        hasBackdrop={hasBackdrop}>
        <View
          style={[
            styles.container,
            {
              alignItems: positionProps[position || 'top'],
              justifyContent: 'center',
            },
          ]}>
          {children}
        </View>
      </_Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    flexDirection: 'row',
  },
});
