import React, { Component } from 'react';


export default class LoginForm extends Component {
  state = {
    // inputError: '*Required',
    // passwordError: '*Required',
    inputDirty: false,
    passwordDirty: false,
  };
  handleChange = (event) => {
    switch (event.target.name) {
      case 'username':
        this.setState({ inputDirty: true });
        break;
      case 'password':
        this.setState({ passwordDirty: true });
        break;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const loginData = {};
    loginData.username = event.target.username.value.trim();
    loginData.password = event.target.password.value.trim();
    this.props.signIn(loginData);
  };
  render() {
    const { inputDirty, passwordDirty } = this.state;

    return (
      <section className="section">
        <div className="container form-wrap">
          <form className="login-form form" onSubmit={this.handleSubmit}>
            <fieldset className="title">
              <legend>Login form</legend>
              <div className="input-wrapper">
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
                {inputDirty && <div className="validation">*Required</div>}
              </div>
              <div className="input-wrapper">
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                {passwordDirty && <div className="validation">*Required</div>}
              </div>
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
