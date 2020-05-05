import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps extends RouteProps {
  isAuthenticated?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const { isAuthenticated, ...otherProps } = props;

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...otherProps} />;
};

export default PrivateRoute;
