import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Header from './components/Header';
import { privateRouteComponents, routeComponents } from './constants/routes';


export default class App extends Component {
  render() {
    return (
      <>
        
        <div className="App">
        <Header />
        <Switch> {[...privateRouteComponents, ...routeComponents]} </Switch>
        </div>
      </>
    );
  }
}
