import React, { Component } from 'react';
import { signin } from '../api/api';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm';


export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
    this.signIn = this.signIn.bind(this)
  }


  async signIn(loginData) {
    setTimeout(async () => {
      const [userDataError, userData] = await signin(loginData);
      const token = userData.USERTOKEN || userData.ADMINTOKEN;
      if (!userDataError && userData.USERTOKEN) {
        localStorage.setItem('token', token);
        this.setState({ token });
      }
    }, 2000);
  }

  render() {
    const { token } = this.state;

    if (token) {
      return <Redirect to="/" />;
    }
    return <LoginForm signIn={this.signIn}></LoginForm>;
  }
}
