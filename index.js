/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';

function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}

function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => <View>First Tab Screen</View>);
  Navigation.registerComponent('example.SecondTabScreen', () => <View>Second Tab Screen</View>);
  Navigation.registerComponent('example.PushedScreen', () => <View>Pushed Screen</View>);
}


function start(){
  registerScreenVisibilityListener();
  registerScreens();
  Navigation.startTabBasedApp({
    animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
    tabs: [
      {
        label: 'One',
        screen: 'example.FirstTabScreen', // this is a registered name for a screen
        title: 'Screen One'
      },
      {
        label: 'Two',
        screen: 'example.SecondTabScreen',
        title: 'Screen Two'
      }
    ]
  });
}

module.exports = {
  start
};


