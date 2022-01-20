import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends Component {
  render() {
    const { children, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem('token') ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
}
