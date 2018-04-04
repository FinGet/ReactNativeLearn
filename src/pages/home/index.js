import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import Carousel from '../../components/carousel.js';
import ImgWrapper from '../../components/imgwrapper.js';
import Footer from '../../components/footer.js';

export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			imageData: [
				{
					title: '图片1',
					url: 'banner_01.png'
				},
				{
					title: '图片2',
					url: 'banner_01.png'
				}
			],
			wrapImageData: [
				{
					title: '教育培训',
					url: 'banner_01.png'
				},
				{
					title: '旅行交友',
					url: 'banner_01.png'
				},
				{
					title: '丽人美容',
					url: 'banner_01.png'
				},
				{
					title: '家居家装',
					url: 'banner_01.png'
				},
				{
					title: '租房乐居',
					url: 'banner_01.png'
				},
				{
					title: '充值话费',
					url: 'banner_01.png'
				}
			]
		}
	}
  render() {
    return (
    	<View>
	    	<ScrollView 
	    			//当值为true时显示滚动条 
		      	showsHorizontalScrollIndicator={false}>
	    		<Carousel duration={2000} imageData={this.state.imageData} />
	    		<View style={styles.wrapper}>
	    			<Text style={styles.title}>
	    				热门商品<Text style={styles.redTitle}>任性选</Text>
	    			</Text>
	    			<Text style={styles.subTitle}>立即开启VIP极速申请通道</Text>
	    		</View>
	    		<View>
	    			<Text style={styles.wrapTitle}>信用生活</Text>
	    			<ImgWrapper imageData={this.state.wrapImageData}></ImgWrapper>
	    		</View>
	    	</ScrollView>
	    	<Footer></Footer>
        <Text>这是底部的</Text>
    	</View>
    );
  }
}

var styles = StyleSheet.create({
	title: {
		fontSize: 20,
		color: 'black',
		marginTop: 30
	},
	subTitle:{
		fontSize: 16
	},
	redTitle:{
		color: 'red'
	},
	wrapper:{
		height: 150,
		padding:20
	},
	wrapTitle:{
		marginLeft:20,
		color: '#333',
		borderLeftWidth: 2,
		borderLeftColor: '#000',
		paddingLeft:10,
		marginBottom: 10,
		fontSize: 16
	}
})