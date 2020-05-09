import { lazy } from 'react';

export interface Route {
  component: React.FC<any> | React.LazyExoticComponent<React.FC<any>>;
  layout?: React.FC<any>;
  name: string;
  path: string;
  protected?: boolean;
  routes?: Route[];
}

export const INDEX = {
  component: lazy(() => import('../pages/IndexPage')),
  name: 'Home',
  path: '/',
};

export const PAGE_A = {
  component: lazy(() => import('../pages/PageA')),
  name: 'Page A',
  path: '/page-a',
};

export const PAGE_B = {
  component: lazy(() => import('../pages/PageB')),
  name: 'Page B',
  path: '/page-b',
};

export const ERROR_404 = {
  component: lazy(() => import('../pages/Error404')),
  name: 'Error 404',
  path: '*',
};

const routes = [INDEX, PAGE_A, PAGE_B, ERROR_404];

export default routes;
