import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import LoginForm from '../components/LoginForm';
import withError from '../HOC/withError';

class LoginPage extends Component {
  signIn = async (loginData) => {
    const [userDataError, userData] = await apiRequest.signin(loginData);
    const token = userData.USERTOKEN || userData.ADMINTOKEN;
    if (!userDataError && userData.USERTOKEN) {
      localStorage.setItem('token', token);
      this.props.history.push('/');
    } else {
      this.props.setError(userDataError);
    }
  };

  render() {
    return <LoginForm signIn={this.signIn} />;
  }
}

export default withError(LoginPage);
