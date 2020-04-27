import { lazy } from 'react';

const routes = {
  INDEX: {
    component: lazy(() => import('../pages/IndexPage')),
    name: 'Home',
    path: '/',
  },
  PAGE_A: {
    component: lazy(() => import('../pages/PageA')),
    name: 'Page A',
    path: '/page-a',
  },
  PAGE_B: {
    component: lazy(() => import('../pages/PageB')),
    name: 'Page B',
    path: '/page-b',
  },
};

export default routes;
