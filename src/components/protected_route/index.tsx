/* eslint-disable */
import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

export interface ProtectedRouteProps extends RouteProps {
  isValid: boolean;
}

const ProtectedRoute: React.SFC<ProtectedRouteProps> = ({ path, isValid, component: Component, ...rest }) => {
  return (
    <Route
      path={path}
      render={(props) => {
        if (isValid) {
          return <Redirect to="/" />;
        } else {
          return <Component {...rest} {...props} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
