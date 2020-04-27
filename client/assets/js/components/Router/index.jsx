import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../../constants/routes';
import Layout from '../Layout';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
