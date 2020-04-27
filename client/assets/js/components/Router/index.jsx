import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import Layout from '../Layout';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {Object.entries(ROUTES).map(([key, value]) => (
          <Route key={key} exact {...value} />
        ))}
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
