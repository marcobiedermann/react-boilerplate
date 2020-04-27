import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import { Route as RRoute } from 'react-router-dom';
import DefaultLayout from '../../layouts/Default';
import PrivateRoute from '../PrivateRoute';

const Route = (props) => {
  const { component: Component, isProtected = false, layout: Layout = DefaultLayout, ...otherProps } = props;

  if (isProtected) {
    return <PrivateRoute {...otherProps} />;
  }

  return (
    <RRoute>
      <Layout>
        <Suspense fallback={<div>Loading …</div>}>
          <Component {...otherProps} />
        </Suspense>
      </Layout>
    </RRoute>
  );
};

Route.propTypes = {
  component: PropTypes.any,
  isProtected: PropTypes.bool,
  layout: PropTypes.any,
};

Route.defaultProps = {
  component: null,
  isProtected: false,
  layout: DefaultLayout,
};

export default Route;
