import React, { Component } from 'react';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }
  handleChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const loginData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.signIn(loginData);
  };
  render() {
    const { invalidData } = this.props;
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
               <div className="validation">*Required</div>
              </div>
              <div className="input-wrapper">
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
               <div className="validation">*Required</div>
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

