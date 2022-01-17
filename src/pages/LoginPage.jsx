import React, { Component } from 'react';
import { signin } from '../api/api';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

export default class LoginPage extends Component {
  state = {
    token: null,
  };

  signIn = async (loginData) => {
    const [userDataError, userData] = await signin(loginData);
    const token = userData.USERTOKEN || userData.ADMINTOKEN;
    if (!userDataError && userData.USERTOKEN) {
      localStorage.setItem('token', token);
      this.setState({ token });
    }
  };
  render() {
    const { token } = this.state;

    if (token) {
      return <Redirect to="/" />;
    }
    return <LoginForm signIn={this.signIn}></LoginForm>;
  }
}
