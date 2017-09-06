/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from './components/firebase';
import { Router, Scene } from 'react-native-router-flux';
import Login from './components/Login';
import PageTwo from './components/StoryList';
import StoryData from './components/StoryData';
import TellStory from './components/TellStory';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Button
} from 'react-native';



export default class testEject extends Component {
    
    render() {
    return (
      
        <Router>
          <Scene key="root">
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="Story Telling" />
          <Scene key="storyData" component={StoryData} title="StoryData" />
          <Scene key="tellStory" component={TellStory} title="Tell your story" />
          </Scene>
          </Router>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('testEject', () => testEject);
