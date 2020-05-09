import React, { Suspense } from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import { Page } from '../../constants/pages';
import DefaultLayout from '../../layouts/Default';
import Loader from '../Loader';
import PrivateRoute from '../PrivateRoute';

export interface AppRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  isProtected?: boolean;
  layout?: React.FC<any>;
  pages?: Page[];
}

const AppRoute: React.FC<AppRouteProps> = (props) => {
  const { component: Component, isProtected, layout: Layout = DefaultLayout, pages, ...otherProps } = props;

  if (isProtected) {
    return <PrivateRoute {...otherProps} />;
  }

  return (
    <Switch>
      {pages && pages.map((page) => <AppRoute key={page.path} {...page} />)}
      <Route>
        <Layout>
          <Suspense fallback={<Loader>Loading …</Loader>}>
            <Component {...otherProps} />
          </Suspense>
        </Layout>
      </Route>
    </Switch>
  );
};

export default AppRoute;
