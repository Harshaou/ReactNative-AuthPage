import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';
import axios from 'axios'
import {Card, CardSection, Button, Spinner} from './common'
import {Input} from './common'



class LoginForm extends Component {

  state = {signup: true, email: '', password: '', errors: '', loading: false}

  onPressAuth = () => {
    const {email, password} = this.state

    if(this.state.signup){
      return axios.post('https://asia-east2-authentication-2040b.cloudfunctions.net/api/signup', (email,password))
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    } else{
      return axios.post('https://asia-east2-authentication-2040b.cloudfunctions.net/api/signup', (email,password))
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }
  }

  renderSign = () => {
  this.setState((state) => ({signup: !state.signup}))
  this.renderSignText()
}

renderSignText = () => {
  if(this.state.signup){
    return `I've already account`
  } else return `Create New Account`
}

buttonChange = () => {
  if(this.state.signup){
    return "Signup"
  } else {
    return "Login"
  }
}


  render() {
    const {errorTextStyle} = styles

    return (
      <Card>
          <CardSection>
          <Input
            label={'Name:'}
            placeholder={'user@gmail.com'}
            value={this.state.email} 
            onChangeText={(email) => this.setState({email})} />
          </CardSection>
          

          <CardSection>
          <Input
            secureTextEntry
            label='Password:'
            placeholder='password'
            value={this.state.password} 
            onChangeText={(password) => this.setState({password})} />
          </CardSection>

          <Text style={errorTextStyle}>{this.state.errors}</Text>

          <CardSection>
              <Button onPress={this.onPressAuth}>
              {this.buttonChange()}
              </Button>
          </CardSection>

          <CardSection >
          <Button onPress={this.renderSign}>{this.renderSignText()}</Button>
          </CardSection>

      </Card>
    );
  }
  }

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
})

export default LoginForm;
