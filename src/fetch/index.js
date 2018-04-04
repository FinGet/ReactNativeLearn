import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';


export default class Fetch extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      error: {}
    }
  }
  componentDidMount(){
    this.getMoviesFromApiAsync();
  }
  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson.movies
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    let list = (
      this.state.data&&this.state.data.map((item,index) => {
        return <Text key={index}>电影名称：{item.title}</Text>
      })
    )
    return (
     <View>
     	{list}
     </View>
    );
  }
}