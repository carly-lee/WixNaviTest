import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class ThirdTabScreen extends PureComponent {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Third Tab Screen</Text>
      </View>
    )
  }
}