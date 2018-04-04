import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';


export default class Other extends Component{
 	static navigationOptions = {
    headerTitle: '其他页面',
    // header: null, // 隐藏顶部导航
    // 
  }
  render() {
  	const {goBack} = this.props.navigation;
  	// const {params} = this.props.navigation.state;
    return (
     <View>
     	<Text>我是其他页面页面</Text>
     	{/*<Text>上一个页面传的参数{params.user}</Text>*/}
     	<Button
          onPress={() => goBack()}
          title="点击我跳转"
        />
     </View>
    );
  }
}