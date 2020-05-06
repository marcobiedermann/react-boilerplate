import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Routes } from '../../constants/routes';
import AppRoute from '../AppRoute';

export interface RouterProps {
  routes: Routes;
}

const Router: React.FC<RouterProps> = (props) => {
  const { routes } = props;

  return (
    <BrowserRouter>
      <Switch>
        {Object.entries(routes).map(([key, value]: any) => (
          <AppRoute exact key={key} {...value} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
