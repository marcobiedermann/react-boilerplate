import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from '../../pages/IndexPage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={IndexPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
