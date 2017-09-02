import React, { Component } from 'react';
import { TouchableHighlight, AppRegistry, StyleSheet, Text, View, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import t from 'tcomb-form-native';
import firebase from './firebase'

var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
  username: t.String,              // a required string
  password: t.String,  // an optional string 
});

var options = {}; // optional rendering options (see documentation)

export default class Login extends Component {
    
    onPress = () =>{
         // call getValue() to get the values of the form
        var value = this.refs.form.getValue();
        if (value) { // if validation fails, value will be null
            console.log(value); // value here is an instance of Person
            firebase.auth().signInWithEmailAndPassword(value.username,value.password)
            .then((user) => {
                console.log('User successfully logged in', user)
                Actions.pageTwo({text: 'Hello World!'})
            })
            .catch((err) => {
                console.error('User signin error', err);
            });
        }
    }

    render() {
        return (
           <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={Person}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
        )
    }

}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});