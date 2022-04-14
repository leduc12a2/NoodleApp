import React, {Component} from 'react';
import {View} from 'react-native';

import {ToastContainer as Toast} from './ToastContainer';

export class Root extends Component {
  render() {
    return (
      <View {...this.props} style={{flex: 1}}>
        {this.props.children}
        <Toast
          ref={(c) => {
            if (c) Toast.toastInstance = c;
          }}
        />
      </View>
    );
  }
}
