import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class FirstTabScreen extends PureComponent {

  openModal = () => {
    this.props.navigator.showModal({
      screen: 'Modal',
      title: "Modal",
      animationType: 'slide-up',
      navigatorButtons: {
        rightButtons: [{ title: 'Close', id: 'close' }]
      }
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.screenTitle}>First Tab Screen</Text>
        <TouchableOpacity onPress={this.openModal}><Text>open a modal</Text></TouchableOpacity>
      </View>
    )
  }
}