import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class InAppNotification extends PureComponent {
  render(){
    return(
      <View style={styles.notification}>
        <Text style={styles.screenTitle}>In app notification</Text>
      </View>
    )
  }
}