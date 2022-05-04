import { lazy } from 'react';
import { BrowserRouter, RouteObject } from 'react-router-dom';
import DefaultLayout from '../../layouts/Default';
import Routes from '../Routes';

const BlankLayout = lazy(() => import('../../layouts/Blank'));
const Error404Page = lazy(() => import('../../pages/Error404'));
const HomePage = lazy(() => import('../../pages/Home'));
const LoginPage = lazy(() => import('../../pages/Login'));
const LogoutPage = lazy(() => import('../../pages/Logout'));
const PageA = lazy(() => import('../../pages/PageA'));
const PrivatePage = lazy(() => import('../../pages/Private'));
const SubPage = lazy(() => import('../../pages/Subpage'));
const RequireAuth = lazy(() => import('../RequireAuth'));

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
        element: <SubPage />,
        path: '/page-a/subpage',
      },
      {
        element: <LoginPage />,
        path: '/login',
      },
      {
        element: <LogoutPage />,
        path: '/logout',
      },
      {
        element: <RequireAuth />,
        children: [
          {
            element: <PrivatePage />,
            path: '/private',
          },
        ],
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
