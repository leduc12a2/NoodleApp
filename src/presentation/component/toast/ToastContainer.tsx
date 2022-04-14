/* eslint-disable class-methods-use-this */
import React, {Component} from 'react';
import {
  Keyboard,
  Platform,
  Animated,
  PanResponder,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

const POSITION = {
  ABSOLUTE: 'absolute',
  BOTTOM: 'bottom',
  TOP: 'top',
  CENTER: 'center',
};

const HEIGHT = Dimensions.get('window').height;

export class ToastContainer extends Component<any, any> {
  private _panResponder: any;
  closeTimeout: any;
  static show({...config}) {
    this.toastInstance.showToast({config});
  }
  static hide() {
    if (this.toastInstance.getModalState()) {
      this.toastInstance.closeToast('functionCall');
    }
  }
  constructor(props: any) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
      pan: new Animated.ValueXY({x: 0, y: 0}),
      keyboardHeight: 0,
      isKeyboardVisible: false,
      modalVisible: false,
    };

    this.keyboardDidHide = this.keyboardDidHide.bind(this);
    this.keyboardDidShow = this.keyboardDidShow.bind(this);
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderRelease: (evt, {dx}) => {
        if (dx !== 0) {
          Animated.timing(this.state.pan, {
            toValue: {x: dx, y: 0},
            duration: 100,
            useNativeDriver: false,
          }).start(() => this.closeToast('swipe'));
        }
      },
    });
  }

  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardDidShow', this.keyboardDidShow);
    Keyboard.removeListener('keyboardDidHide', this.keyboardDidHide);
  }

  getToastStyle() {
    const isCenter = this.state.position == POSITION.CENTER;
    const isTop = this.state.position === POSITION.TOP;
    const isBottom = this.state.position === POSITION.BOTTOM;
    return {
      position: POSITION.ABSOLUTE,
      opacity: this.state.fadeAnim,
      width: '100%',
      elevation: 9,
      paddingHorizontal: Platform.OS === 'ios' ? 20 : 0,
      top: isTop ? 30 : isCenter ? HEIGHT / 2 - 10 : undefined,
      bottom: isBottom ? this.getTop() : undefined,
    };
  }

  getTop() {
    if (Platform.OS === 'ios') {
      if (this.state.isKeyboardVisible) {
        return this.state.keyboardHeight;
      }
      return 30;
    }
    return 0;
  }

  getButtonText(buttonText: string) {
    if (buttonText) {
      if (buttonText.trim().length === 0) {
        return undefined;
      }
      return buttonText;
    }
    return undefined;
  }
  getModalState() {
    return this.state.modalVisible;
  }

  static toastInstance: ToastContainer;

  keyboardDidHide() {
    this.setState({
      keyboardHeight: 0,
      isKeyboardVisible: false,
    });
  }

  keyboardDidShow(e: any) {
    this.setState({
      keyboardHeight: e.endCoordinates.height,
      isKeyboardVisible: true,
    });
  }

  showToast({config}: any) {
    this.setState({
      modalVisible: true,
      text: config.text,
      buttonText: this.getButtonText(config.buttonText),
      position: config.position ? config.position : POSITION.BOTTOM,
      style: config.style,
      buttonTextStyle: config.buttonTextStyle,
      buttonStyle: config.buttonStyle,
      textStyle: config.textStyle,
      onClose: config.onClose,
      swipeDisabled: config.swipeDisabled || false,
    });
    // If we have a toast already open, cut off its close timeout so that it won't affect *this* toast.
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    // Set the toast to close after the duration.
    if (config.duration !== 0) {
      const duration = config.duration > 0 ? config.duration : 2500;
      this.closeTimeout = setTimeout(
        this.closeToast.bind(this, 'timeout'),
        duration,
      );
    }
    // Fade the toast in now.
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }
  closeModal = (reason: any) => {
    this.setState({
      modalVisible: false,
    });
    const {onClose} = this.state;
    if (onClose && typeof onClose === 'function') {
      onClose(reason);
    }
  };
  closeToast(reason: any) {
    clearTimeout(this.closeTimeout);
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      this.closeModal(reason);
      this.state.pan.setValue({x: 0, y: 0});
    });
  }

  render() {
    if (this.state.modalVisible) {
      const {x, y} = this.state.pan;
      return (
        <Animated.View
          {...(this.state.swipeDisabled ? {} : this._panResponder.panHandlers)}
          style={[
            this.getToastStyle(),
            {
              transform: [{translateX: x}, {translateY: y}],
            },
          ]}>
          <View style={[styles.toastStyle, this.state.style]}>
            <View style={styles.containerText}>
              <Text style={[styles.toastTextStyle, this.state.textStyle]}>
                {this.state.text}
              </Text>
            </View>
          </View>
        </Animated.View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  toastStyle: {
    alignItems: 'center',
    marginBottom: 50,
  },
  toastTextStyle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  containerText: {
    backgroundColor: '#000',//#3a3a3ab9
    padding: 12,
    borderRadius: 5,
  },
});
