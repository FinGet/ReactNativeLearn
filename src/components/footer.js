import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
export default class App extends Component{
  render() {
    return (
      // 尝试把`flexDirection`改为`column`看看
      <View style={styles.view}>
        <Text>首页</Text>
        <Text>白条</Text>
        <Text>扫一扫</Text>
        <Text>账单</Text>
        <Text>我的</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	view:{

	}
})