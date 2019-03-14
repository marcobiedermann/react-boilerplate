import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from '../../pages/IndexPage';
import Layout from '../Layout';

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
