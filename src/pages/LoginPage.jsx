import React, { Component } from 'react';
import { signin } from '../api/api';
import { Redirect } from 'react-router-dom';
import Login from '../components/Login';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
  }

  async componentDidMount() {
    setTimeout(async () => {
      const loginData = {
        username: 'Daria',
        password: 'danger',
      };
      const [userDataError, userData] = await signin(loginData);
      if (!userDataError && userData.USERTOKEN) {
        localStorage.setItem('token', userData.USERTOKEN);
        this.setState({ token: true });
      }
    }, 2000);
  }

  render() {
    const { token } = this.state;
    return token ? <Redirect to="/" /> : <Login></Login>;
  }
}
