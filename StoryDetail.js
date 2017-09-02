import React from 'react';
import { StyleSheet, Text, View, ListView, Image,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class BooksDetail extends React.Component {
    constructor(props){
        super(props)
    }
    doIt=()=>{
        console.log("Test")
    }

    render() {
        const goToStoryData = () => Actions.storyData({...this.props});
        return (
            <TouchableHighlight onPress={goToStoryData}> 
            <View style={styles.container} >
                <View style={styles.content}>
                    <Text style={styles.title}>{this.props.title}</Text>   
                    <Text style={styles.category}>{this.props.category}</Text>
                </View>
            </View>
            </TouchableHighlight>
            )
        }


}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#1bd6c9",
    height:100,
    flexDirection:'row',
    borderColor: '#ffffff',
    borderWidth:5,
  },
  image:{
      width:80,
    //   flex:1
  },
  title:{
     color: 'black',
     fontWeight: 'bold',
     fontSize:20
  },
  category:{
      color:"#555555",
      fontStyle:"italic",
  }
});