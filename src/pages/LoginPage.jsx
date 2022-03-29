import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { apiRequest } from '../api/apiService';
import LoginForm from '../components/LoginForm';
import { AppContext } from '../contexts/AppContext';
import withError from '../HOC/withError';
import { Cookie } from '../utils/cookie';

class LoginPage extends Component {
  state = {
    invalidData: '',
    token: null,
  };

  signIn = async (loginData) => {
    const [userDataError, userData] = await apiRequest.signin(loginData);
    if (!userDataError) {
      const tokenAccess = userData.user.tokens.accessToken;
      const tokenRefresh = userData.user.tokens.refreshToken;
      localStorage.setItem('token', tokenAccess);
      Cookie.set('refreshToken', tokenRefresh, 30);
      this.setState({ token: tokenAccess });
      this.context.getToken(tokenAccess);
    } else if (userDataError.response) {
      this.setState({ invalidData: userDataError.response.data.message });
    } else {
      this.props.setError(userDataError);
    }
  };

  render() {
    const { invalidData, token } = this.state;
    return token ? (
      <Redirect to="/" />
    ) : (
      <LoginForm invalidData={invalidData} signIn={this.signIn} />
    );
  }
}

export default withError(LoginPage);
LoginPage.contextType = AppContext;
