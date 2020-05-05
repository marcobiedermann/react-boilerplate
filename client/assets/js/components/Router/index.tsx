import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import AppRoute from '../AppRoute';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {Object.entries(ROUTES).map(([key, value]) => (
        <AppRoute key={key} exact {...value} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Router;
