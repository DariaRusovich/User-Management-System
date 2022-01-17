import { Route } from 'react-router-dom';
import PrivateRoute from '../protectedRoutes/PrivateRoute';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import EmployeesPage from '../pages/EmployeesPage';
import NotFoundPage from '../pages/NotFoundPage';

export const routes = [
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
];

export const privateRoutes = [
  {
    path: '/',
    Component: HomePage,
    exact: true,
  },
  {
    path: '/departments/:id/employees',
    Component: EmployeesPage,
  },
];

export const routeComponents = routes.map((route, i) => (
  <Route
    exact={route.exact}
    path={route.path}
    component={route.Component}
    key={i}
  />
));
export const privateRouteComponents = privateRoutes.map((route, i) => {
  const { Component } = route;
  return (
    <PrivateRoute exact={route.exact} path={route.path} key={i}>
      <Component />
    </PrivateRoute>
  );
});
