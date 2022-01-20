import React, { Component } from 'react';
import { signin } from '../api/api';
import LoginForm from '../components/LoginForm';
import withError from '../HOC/withError';

class LoginPage extends Component {
  signIn = async (loginData) => {
    const [userDataError, userData] = await signin(loginData);
    const token = userData.USERTOKEN || userData.ADMINTOKEN;
    if (!userDataError && userData.USERTOKEN) {
      localStorage.setItem('token', token);
      this.props.history.push('/');
    } else {
      this.setError(userDataError);
    }
  };

  render() {
    return <LoginForm signIn={this.signIn} />;
  }
}

export default withError(LoginPage);
