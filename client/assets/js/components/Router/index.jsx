import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout';

const IndexPage = lazy(() => import('../../pages/IndexPage'));

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={IndexPage} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
