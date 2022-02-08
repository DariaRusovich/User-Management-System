import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import LoginForm from '../components/LoginForm';
import { AppContext } from '../contexts/AppContext';
import withError from '../HOC/withError';
import { Cookie } from '../utils/cookie';

class LoginPage extends Component {
  state = {
    invalidData: '',
  };

  signIn = async (loginData) => {
    const [userDataError, userData] = await apiRequest.signin(loginData);
    if (!userDataError) {
      const token = userData.user.tokens.accessToken;
      localStorage.setItem('token', token);
      Cookie.set('refreshToken', userData.user.tokens.refreshToken, 30);
      this.props.history.push('/');
      this.context.getToken(token)
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
LoginPage.contextType = AppContext;
