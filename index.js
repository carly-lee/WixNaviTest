/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
import Reactotron from 'reactotron-react-native'

import WelcomeScreen from './screens/WelcomeScreen';
import FirstTabScreen from './screens/FirstTabScreen';
import SecondTabScreen from './screens/SecondTabScreen';
import ThirdTabScreen from './screens/ThirdTabScreen';

Reactotron
  .configure({ name: 'WixNaviTest', host: 'localhost' }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!

console.tron = Reactotron;
Reactotron.clear();

function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.tron.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.tron.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.tron.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.tron.log(`Screen disappeared ${screen}`)
  }).register();
}

function registerScreens() {
  Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen);
  Navigation.registerComponent('FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('ThirdTabScreen', () => ThirdTabScreen);
}

registerScreens();
registerScreenVisibilityListener();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'WelcomeScreen',
  },
  passProps: {}
});
