import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import LoginForm from '../components/LoginForm';
import withError from '../HOC/withError';

class LoginPage extends Component {
  state = {
    invalidData: '',
  };

  signIn = async (loginData) => {
    const [userDataError, userData] =
      await apiRequest.signin(loginData);
    if (!userDataError) {
      const token = userData.user.tokens.accessToken;
      localStorage.setItem('token', token);
      this.props.history.push('/');
    } else if (userDataError.response) {
      this.setState({ invalidData: userDataError.response.data.message });
    } else {
      this.props.setError(userDataError);
    }
  };

  render() {
    const { invalidData } = this.state;
    return <LoginForm invalidData={invalidData} signIn={this.signIn} />;
  }
}

export default withError(LoginPage);
