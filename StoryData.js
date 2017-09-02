import React, { Component } from 'react';
import { StyleSheet,View, Text,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class StoryData extends Component {
    constructor(props){
        super(props)
    }
 render() {
    return (
    <View style={styles.container} >      
        <Text>Content: {this.props.content}</Text>
    </View>
    )
}
}

const styles = StyleSheet.create({
 container: {
    backgroundColor:"#ffffff",
    flex:1,
    flexDirection:'column',
    borderColor: '#ffffff',
    borderWidth:10,
    marginTop:29
  },
  head:{
    fontSize:20,
    marginLeft:50
  },
  image:{
      width:80
  }

})