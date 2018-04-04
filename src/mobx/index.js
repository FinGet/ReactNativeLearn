import React, { Component } from 'react';
import App from './app.js';
import ListStore from './listStore.js';

import {
  AppRegistry
} from 'react-native'
import {Navigator}
 from 'react-native-deprecated-custom-components';
class ReactNativeMobX extends Component {
  renderScene (route, navigator) {
    return <route.component {...route.passProps} navigator={navigator} />
  }
  configureScene (route, routeStack) {
    if (route.type === 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.PushFromRight
  }
  render () {
    return (
      <Navigator
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{
          component: App,
          passProps: {
            store: ListStore
          }
        }} />
    )
  }
}

export default ReactNativeMobX;