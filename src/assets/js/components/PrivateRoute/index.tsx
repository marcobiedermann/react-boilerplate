import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps extends RouteProps {
  isAuthenticated?: boolean;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { isAuthenticated, ...otherProps } = props;

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...otherProps} />;
}

export default PrivateRoute;
