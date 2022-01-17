import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import EmployeesPage from './pages/EmployeesPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './protectedRoutes/PrivateRoute';
import RouteWithSubRoutes from './pages/RouteWithSubRoutes';

const routes = [
  {
    path: '/login',
    component: LoginPage,
  },

  {
    path: '*',
    component: NotFoundPage,
  },
];

const privateRoutes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/departments/:id/employees',
    component: EmployeesPage,
  },
];

export default class App extends Component {
  render() {
    const routeComponents = routes.map((route, i) => (
      <Route
        exact={route.exact}
        path={route.path}
        component={route.component}
        key={i}
      ></Route>
    ));
    const privateRouteComponents = privateRoutes.map((route, i) => (
      <PrivateRoute
        exact={route.exact}
        path={route.path}
        component={route.component}
        key={i}
      />
    ));
    console.log(localStorage.getItem('token'));
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
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          {/* {localStorage.getItem('token') ? (
            <Switch> {privateRouteComponents} </Switch>
          ) : (
            <Switch> {routeComponents} </Switch>
          )} */}
          <Switch> {[...routeComponents, ...privateRouteComponents]} </Switch>
        </div>
      </>
    );
  }
}
{
  /* <Route path="/login">
              <LoginPage></LoginPage>
            </Route>
            <PrivateRoute path="/departments/:id/employees">
              <EmployeesPage></EmployeesPage>
            </PrivateRoute>
            <PrivateRoute exact path="/">
              <HomePage></HomePage>
            </PrivateRoute>
            <Route path="*">
              <NotFoundPage />
            </Route> */
}
{
  /* {routes.map((route, i) => (
              <Route path={route.path} exact={route.exact} key={i}>
                <route.component routes={route.routes} />
              </Route>
            ))} */
}

{
  /* {privateRoutes.map((route, i) => (
              // <PrivateRoute path={route.path} exact={route.exact} key={i}>
              //   <route.component routes={route.routes} />
              // </PrivateRoute>
              <RouteWithSubRoutes route={route} key={i} />
            ))} */
}
