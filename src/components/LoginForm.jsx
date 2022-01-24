import React, { Component } from 'react';
import '../styles/LoginForm.css';

export default class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const loginData = {};
    loginData.username = event.target.username.value.trim();
    loginData.password = event.target.password.value.trim();
    this.props.signIn(loginData);
  };
  render() {
    return (
      <section className="section">
        <div className="container form-wrap">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <fieldset className="title">
              <legend>Login form</legend>
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    );
  }
}
