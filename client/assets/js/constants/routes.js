import { lazy } from 'react';

const IndexPage = lazy(() => import('../pages/IndexPage'));
const PageA = lazy(() => import('../pages/PageA'));
const PageB = lazy(() => import('../pages/PageB'));

const routes = [
  {
    path: '/page-a',
    component: PageA,
  },
  {
    path: '/page-b',
    component: PageB,
  },
  {
    path: '/',
    component: IndexPage,
  },
];

export default routes;
