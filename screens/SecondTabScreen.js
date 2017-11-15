import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class SecondTabScreen extends PureComponent {
  
  showNotification = () => {
    this.props.navigator.showInAppNotification({
      screen: "InAppNotification", // unique ID registered with Navigation.registerScreen
      passProps: {}, // simple serializable object that will pass as props to the in-app notification (optional)
      autoDismissTimerSec: 1 // auto dismiss notification in seconds
     });
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Second Tab Screen</Text>
        <TouchableOpacity onPress={this.showNotification}><Text>show an in app notification</Text></TouchableOpacity>
      </View>
    )
  }
}