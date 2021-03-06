import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Page } from '../../constants/pages';
import AppRoute from '../AppRoute';

export interface RouterProps {
  pages: Page[];
}

const Router: React.FC<RouterProps> = (props) => {
  const { pages } = props;

  return (
    <BrowserRouter>
      <Switch>
        {pages.map((page) => (
          <AppRoute key={page.path} {...page} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
