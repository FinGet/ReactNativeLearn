import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

// 获取屏幕宽度
const ScreenWidth = require("Dimensions").get('window').width;

export default class ImgWrapper extends Component{
  render() {
    let imageList = this.props.imageData.map(
      (item, index) => {
        return (
        	<Image key={index} style={styles.imageStyle} source={require('../assets/banner_01.png')} />
        )
      }
    );
    return (
    	<View>
	      	{imageList}
      </View>
    );
  }
}

const styles = StyleSheet.create({  
   imageStyle:{
   	width:ScreenWidth - 40,
   	height: 150,
   	marginLeft: 20,
   	marginBottom: 20,
   	borderRadius: 10
   }
}); 