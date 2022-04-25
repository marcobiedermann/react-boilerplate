export interface Page {
  name: string;
  path: string;
  pages?: Page[];
}

export const INDEX: Page = {
  name: 'Home',
  path: '/',
};

export const PAGE_A: Page = {
  name: 'Page A',
  path: '/page-a',
};

export const SUBPAGE: Page = {
  name: 'Subpage',
  path: '/page-b/subpage',
};

export const PAGE_B: Page = {
  name: 'Page B',
  path: '/page-b',
  pages: [SUBPAGE],
};

export const ERROR_404: Page = {
  name: 'Error 404',
  path: '*',
};

const PAGES = [PAGE_A, PAGE_B, INDEX, ERROR_404];

export default PAGES;
