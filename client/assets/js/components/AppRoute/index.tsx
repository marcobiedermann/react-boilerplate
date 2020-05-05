import React, { Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import DefaultLayout from '../../layouts/Default';
import PrivateRoute from '../PrivateRoute';

export interface AppRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  isProtected?: boolean;
  layout?: React.FC<any>;
}

const AppRoute: React.FC<AppRouteProps> = (props) => {
  const { component: Component, isProtected = false, layout: Layout = DefaultLayout, ...otherProps } = props;

  if (isProtected) {
    return <PrivateRoute {...otherProps} />;
  }

  return (
    <Route>
      <Layout>
        <Suspense fallback={<div>Loading …</div>}>
          <Component {...otherProps} />
        </Suspense>
      </Layout>
    </Route>
  );
};

export default AppRoute;
