import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Modal extends PureComponent {
  componentDidMount() {
    this.props.navigator.setOnNavigatorEvent(this.onClose);
  }

  onClose = (e) => {
    if(e.type === 'NavBarButtonPress' && e.id === 'close'){
      this.props.navigator.dismissModal({
        animationType: 'slide-down'
      })
    }
  }

  render(){
    return(
      <View style={[styles.container, { backgroundColor: 'gray' }]}>
        <Text style={styles.screenTitle}>Modal</Text>
      </View>
    )
  }
}