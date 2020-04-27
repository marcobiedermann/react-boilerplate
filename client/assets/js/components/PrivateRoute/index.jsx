import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { isAuthenticated, ...otherProps } = props;

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...otherProps} />;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  isAuthenticated: false,
};

export default PrivateRoute;
