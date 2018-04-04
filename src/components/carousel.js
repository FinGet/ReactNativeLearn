import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';

// 获取屏幕宽度
const ScreenWidth = require("Dimensions").get('window').width;

export default class Carousel extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentpage: 0
		}
	}
	componentDidMount(){
		this._startTimer();
	}
	/**
	 * 滑动完一帧
	 * @return {[type]} [description]
	 */
	_onAnimationEnd(e){
		//求出偏移量  
    let offsetX = e.nativeEvent.contentOffset.x;  
    //求出当前页数  
    let pageIndex = Math.floor(offsetX / ScreenWidth);  
    //更改状态机  
    this.setState({ currentPage: pageIndex }); 

	}
	/**
	 * 开始拖拽
	 * @return {[type]} [description]
	 */
	_onScrollBeginDrag(){
		this.timer && clearTimeout(this.timer);
	}
	/**
	 * 结束拖拽
	 * @return {[type]} [description]
	 */
	_onScrollEndDrag(){
		this.timer &&this._startTimer();  
	}
	/**
	 * 设置定时器
	 * @return {[type]} [description]
	 */
	_startTimer(){  
    let scrollView = this.refs.scrollView;  
    this.timer = setInterval(  
      ()=>{
	      console.log('开启定时器');   
	      let imageCount = this.props.imageData.length;  
	      let activePage = 0;  
	      if(this.state.currentPage>=imageCount+1){  
	        activePage = 0;  
	      }else{  
	        activePage = this.state.currentPage+1;  
	      }  
	      this.setState({currentPage:activePage});  
	      let offsetX = activePage * ScreenWidth;  
	      scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true});  
      },  
      this.props.duration || 1000 

    );  
  }  
  render() {
    let imageList = this.props.imageData.map(
      (item, index) => {
        return <Image key={index} style={styles.imageStyle} source={require('../assets/banner_01.png')} />
      }
    );
    return (
    	<View>
	      <ScrollView
	      	ref='scrollView' 
	      	horizontal={true}
	      	//当值为true时显示滚动条 
	      	showsHorizontalScrollIndicator={false}  
	        //当值为true时，滚动条会停在滚动视图的尺寸的整数倍位置。这个可以用在水平分页上  
	        pagingEnabled={true}  
	        //滑动完一贞  
	        onMomentumScrollEnd={(e)=>{this._onAnimationEnd(e)}}  
	        //开始拖拽  
	        onScrollBeginDrag={()=>{this._onScrollBeginDrag()}}  
	        //结束拖拽  
	        onScrollEndDrag={()=>{this._onScrollEndDrag()}}  
	      >
	      	{imageList}
	      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
   imageStyle:{
   	width:ScreenWidth
   }
}); 