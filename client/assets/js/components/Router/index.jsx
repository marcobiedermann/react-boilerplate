import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import Route from '../Route';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {Object.entries(ROUTES).map(([key, value]) => (
        <Route key={key} exact {...value} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Router;
