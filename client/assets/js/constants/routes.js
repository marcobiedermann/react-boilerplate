import { lazy } from 'react';

const IndexPage = lazy(() => import('../pages/IndexPage'));
const PageA = lazy(() => import('../pages/PageA'));
const PageB = lazy(() => import('../pages/PageB'));

const routes = [
  {
    component: IndexPage,
    name: 'Home',
    path: '/',
  },
  {
    component: PageA,
    name: 'Page A',
    path: '/page-a',
  },
  {
    component: PageB,
    name: 'Page B',
    path: '/page-b',
  },
];

export default routes;
