import { React, Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import DepartmentsList from './components/DepartmentsList';
import EmployeesList from './components/EmployeesList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/employees">EmployeesList</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/employees">
            <EmployeesList></EmployeesList>
          </Route>
          <Route path="/">
            <DepartmentsList></DepartmentsList>
          </Route>
          <Route></Route>
          <Route></Route>
        </Switch>
      </div>
    );
  }
}
