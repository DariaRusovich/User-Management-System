import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleSubmit(event){
        event.preventDefault()
        const loginData = {}
        loginData.username = event.target.username.value
        loginData.password = event.target.password.value
        this.props.signIn(loginData)
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name='username' placeholder='Username' required/>
        <input type="password" name='password' placeholder='Password' required/>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    );
  }
}
