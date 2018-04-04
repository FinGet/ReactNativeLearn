import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator
} from 'react-native';

// import Home from './src/pages/home/index.js'; 
// import ReactNativeMobX from './src/mobx/index.js';
import MyScreens from './src/navigation/index.js';
import Fetch from './src/fetch/index.js';

export default class App extends Component{
  render() {
    return (
      <Fetch />
    );
  }
}