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
  ERROR_404: {
    component: lazy(() => import('../pages/Error404')),
    name: 'Error 404',
    path: '*',
  },
};

export default routes;
