import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import EmployeesPage from './pages/EmployeesPage'
import NotFoundPage from './pages/NotFoundPage'


export default class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/department/:id">EmployeesList</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/login">
              <LoginPage></LoginPage>
            </Route>
            <Route path="/department/:id">
              <EmployeesPage></EmployeesPage>
            </Route>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}
