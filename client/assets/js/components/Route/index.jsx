import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import { Route as RRRoute } from 'react-router-dom';
import DefaultLayout from '../../layouts/Default';

const Route = (props) => {
  const { component: Component, layout: Layout = DefaultLayout, ...otherProps } = props;

  return (
    <RRRoute>
      <Layout>
        <Suspense fallback={<div>Loading …</div>}>
          <Component {...otherProps} />
        </Suspense>
      </Layout>
    </RRRoute>
  );
};

Route.propTypes = {
  component: PropTypes.any,
  layout: PropTypes.any,
};

Route.defaultProps = {
  component: null,
  layout: DefaultLayout,
};

export default Route;
