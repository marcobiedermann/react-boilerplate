import { lazy } from 'react';

const IndexPage = lazy(() => import('../pages/IndexPage'));
const PageA = lazy(() => import('../pages/PageA'));
const PageB = lazy(() => import('../pages/PageB'));

const routes = {
  INDEX: {
    component: IndexPage,
    name: 'Home',
    path: '/',
  },
  PAGE_A: {
    component: PageA,
    name: 'Page A',
    path: '/page-a',
  },
  PAGE_B: {
    component: PageB,
    name: 'Page B',
    path: '/page-b',
  },
};

export default routes;
