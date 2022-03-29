import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Header from './components/Header';
//import { privateRouteComponents, routeComponents } from './constants/routes';
import EmployeesPage from './pages/EmployeesPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './protectedRoutes/PrivateRoute';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute exact path="/">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute path="/departments/:id/employees">
            <EmployeesPage />
          </PrivateRoute>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    );
  }
}
//<Switch>{[...privateRouteComponents, ...routeComponents]}</Switch>
