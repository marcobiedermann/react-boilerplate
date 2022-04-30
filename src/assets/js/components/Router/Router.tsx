import { BrowserRouter, RouteObject } from 'react-router-dom';
import BlankLayout from '../../layouts/Blank';
import DefaultLayout from '../../layouts/Default';
import Error404Page from '../../pages/Error404';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import LogoutPage from '../../pages/Logout';
import PageA from '../../pages/PageA';
import PrivatePage from '../../pages/Private';
import SubPage from '../../pages/Subpage';
import RequireAuth from '../RequireAuth';
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
