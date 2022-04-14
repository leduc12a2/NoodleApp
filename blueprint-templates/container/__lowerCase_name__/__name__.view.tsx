import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './{{name}}.styles';
import { {{name}}Props} from './types';
import { {{name}}Logic} from './{{name}}.logic';
export const {{name}}: React.FC<{{name}}Props> = (props) => {
  const {} = props;
  const {} = {{name}}Logic();
  return (
    <View style={styles.container}>
      <Text>{{name}}</Text>
    </View>
  )
}