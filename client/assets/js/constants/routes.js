import { lazy } from 'react';

const IndexPage = lazy(() => import('../pages/IndexPage'));

const routes = [
  {
    path: '/',
    component: IndexPage,
  },
];

export default routes;
