import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';


export default class First extends Component{
	// static navigationOptions = ({ navigation }) => ({
 //    title: `${navigation.state.params.user}`,
 //  });
 	static navigationOptions = {
    headerTitle: '第一页',
    // header: null, // 隐藏顶部导航
    // 
  }
  render() {
  	const {navigate} = this.props.navigation;
  	// const {params} = this.props.navigation.state;
    return (
     <View>
     	<Text>我是first页面</Text>
     	{/*<Text>上一个页面传的参数{params.user}</Text>*/}
     	<Button
          onPress={() => navigate('Second',{papa:'参数222'})}
          title="点击我跳转"
        />
     </View>
    );
  }
}