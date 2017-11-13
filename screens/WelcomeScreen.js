import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class WelcomeScreen extends PureComponent {

  constructor(props){
    super(props);
    this.props.navigator.toggleNavBar({
      to: 'hidden'
    })
  }

  goToTab = () => {
    Navigation.startTabBasedApp({
      animationType: 'push',
      passProps: {},
      tabs: [
        {
          label: 'One',
          screen: 'FirstTabScreen', // this is a registered name for a screen
          title: 'Screen One'
        },
        {
          label: 'Two',
          screen: 'SecondTabScreen',
          title: 'Screen Two'
        },
        {
          label: 'Three',
          screen: 'ThirdTabScreen',
          title: 'Screen Two'
        }
      ]
    });
  }

  render(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>Welcome Screen</Text>
        <TouchableOpacity onPress={this.goToTab}><Text>Go to Tab Screen</Text></TouchableOpacity>
      </View>
    )
  }
}