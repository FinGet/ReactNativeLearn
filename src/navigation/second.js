import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';


export default class First extends Component{
	// static navigationOptions = ({ navigation }) => ({
 //    title: `${navigation.state.params.papa}`,
 //  });
 	static navigationOptions = {
    headerTitle: '第二页',
    // header: null, // 隐藏顶部导航
    // 
  }
  render() {
  	const {goBack} = this.props.navigation;
  	// const {params} = this.props.navigation.state;
    return (
     <View>
     	<Text>我是second页面</Text>
     	{/*<Text>上一个页面传的参数{params.papa}</Text>*/}
     	<Button
          onPress={() => goBack()}
          title="点击我回跳"
        />
     </View>
    );
  }
}