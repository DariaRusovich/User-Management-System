import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import { privateRouteComponents, routeComponents } from './constants/routes';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Switch> {[...privateRouteComponents, ...routeComponents]} </Switch>
        </div>
      </>
    );
  }
}
