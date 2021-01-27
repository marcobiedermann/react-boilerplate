import { lazy } from 'react';

export interface Page {
  component: React.FC<any> | React.LazyExoticComponent<React.FC<any>>;
  layout?: React.FC<any>;
  name: string;
  path: string;
  isProtected?: boolean;
  pages?: Page[];
}

export const INDEX: Page = {
  component: lazy(() => import('../pages/IndexPage')),
  name: 'Home',
  path: '/',
};

export const PAGE_A: Page = {
  component: lazy(() => import('../pages/PageA')),
  name: 'Page A',
  path: '/page-a',
};

export const SUBPAGE: Page = {
  component: lazy(() => import('../pages/Subpage')),
  name: 'Subpage',
  path: '/page-b/subpage',
};

export const PAGE_B: Page = {
  component: lazy(() => import('../pages/PageB')),
  name: 'Page B',
  path: '/page-b',
  pages: [SUBPAGE],
};

export const ERROR_404: Page = {
  component: lazy(() => import('../pages/Error404')),
  name: 'Error 404',
  path: '*',
};

const PAGES = [PAGE_A, PAGE_B, INDEX, ERROR_404];

export default PAGES;
