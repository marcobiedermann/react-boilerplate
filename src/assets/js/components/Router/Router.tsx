import React from 'react';
import { BrowserRouter, RouteObject } from 'react-router-dom';
import BlankLayout from '../../layouts/Blank';
import DefaultLayout from '../../layouts/Default';
import Error404Page from '../../pages/Error404';
import HomePage from '../../pages/Home';
import PageA from '../../pages/PageA';
import PageB from '../../pages/PageB';
import SubPage from '../../pages/Subpage';
import Routes from '../Routes';

const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        element: <HomePage />,
        path: '/',
      },
      {
        element: <PageA />,
        path: '/page-a',
      },
      {
        element: <PageB />,
        path: '/page-b',
      },
      {
        element: <SubPage />,
        path: '/page-b/subpage',
      },
    ],
  },
  {
    element: <BlankLayout />,
    children: [
      {
        element: <Error404Page />,
        path: '*',
      },
    ],
  },
];

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes routes={routes} />
    </BrowserRouter>
  );
}

export default Router;
