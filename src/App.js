import React, { Component } from 'react';
import { View} from 'react-native';
import firebase from 'firebase'
import { Header} from './components/common';
import LoginForm from './components/LoginForm';


var firebaseConfig = {
  apiKey: "AIzaSyA4He0uirGtch6mo0OpGNX6ziIFPYE-Vzs",
  authDomain: "authentication-2040b.firebaseapp.com",
  databaseURL: "https://authentication-2040b.firebaseio.com",
  projectId: "authentication-2040b",
  storageBucket: "authentication-2040b.appspot.com",
  messagingSenderId: "493374624541",
  appId: "1:493374624541:web:6cfd972d28afc0419907f4",
  measurementId: "G-S8RMV5MKC9"
};

class App extends Component {
componentDidMount(){
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
}

  render() {
    return (
      <View>
        <Header text={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
