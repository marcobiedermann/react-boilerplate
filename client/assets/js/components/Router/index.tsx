import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from '../../constants/routes';
import AppRoute from '../AppRoute';

export interface RouterProps {
  routes: Route[];
}

const Router: React.FC<RouterProps> = (props) => {
  const { routes } = props;

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <AppRoute exact key={route.path} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
