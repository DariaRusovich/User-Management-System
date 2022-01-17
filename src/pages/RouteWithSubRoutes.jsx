import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from '../protectedRoutes/PrivateRoute';

export default class RouteWithSubRoutes extends Component {
  render() {
    const { route } = this.props;
    console.log(route);
    return (
      //<></>
      <PrivateRoute path={route.path} exact={route.exact}>
        <route.component routes={route.routes} />
      </PrivateRoute>
    );
  }
}
