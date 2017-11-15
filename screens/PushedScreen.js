import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class PushedScreen extends PureComponent {
  pushScreen = () => {
    this.props.navigator.push({
      screen: 'PushedScreen',
      title: 'Pushed Screen',
      animationType: 'slide-left',
      navigatorStyle: { disabledBackGesture: false }
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Pushed Screen</Text>
        <TouchableOpacity onPress={this.pushScreen}><Text>Push a Screen</Text></TouchableOpacity>
      </View>
    )
  }
}