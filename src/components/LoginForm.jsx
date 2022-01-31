import React, { Component } from 'react';
import withValidation from '../HOC/withValidation';

class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const loginData = {};
    loginData.username = event.target.username.value.trim();
    loginData.password = event.target.password.value.trim();
    this.props.signIn(loginData);
  };
  render() {
    const { invalidData, handleChange, inputUserNameDirty, passwordDirty } = this.props;
    return (
      <section className="section">
        <div className="container form-wrap">
          <form className="login-form form" onSubmit={this.handleSubmit}>
            <fieldset className="title">
              <legend>Login form</legend>
              <div className="input-wrapper">
                <input
                  onChange={handleChange}
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
                {inputUserNameDirty && <div className="validation">*Required</div>}
              </div>
              <div className="input-wrapper">
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                {passwordDirty && <div className="validation">*Required</div>}
              </div>
              {invalidData && <p className="warning-message">{invalidData}</p>}
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
export default withValidation(LoginForm);
