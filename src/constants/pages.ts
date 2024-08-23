export interface Page {
  name: string;
  path: string;
  pages?: Page[];
  isPrivate?: boolean;
}

export const INDEX: Page = {
  name: 'Home',
  path: '/',
};

export const LOGIN: Page = {
  name: 'Login',
  path: '/login',
};

export const LOGOUT: Page = {
  name: 'Logout',
  path: '/logout',
};

export const SUBPAGE: Page = {
  name: 'Subpage',
  path: '/page-a/subpage',
};

export const PAGE_A: Page = {
  name: 'Page A',
  path: '/page-a',
  pages: [SUBPAGE],
};

export const PRIVATE: Page = {
  name: 'Private',
  path: '/private',
  isPrivate: true,
};

export const USERS: Page = {
  name: 'Users',
  path: '/users',
};

export const ERROR_404: Page = {
  name: 'Error 404',
  path: '*',
};

const PAGES = [PAGE_A, PRIVATE, INDEX, LOGIN, LOGOUT, USERS, ERROR_404];

export default PAGES;
