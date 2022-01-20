import React, { Component } from 'react';

export default class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const loginData = {};
    loginData.username = event.target.username.value.trim();
    loginData.password = event.target.password.value.trim();
    const validUsername = loginData.username.length > 3;
    const validpassword = loginData.password.length > 3;
    if ((validUsername, validpassword)) {
      this.props.signIn(loginData);
    } else {
      alert('Data is not valid');
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    );
  }
}
