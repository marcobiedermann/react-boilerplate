import { lazy } from 'react';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../../layouts/Default';

const BlankLayout = lazy(() => import('../../layouts/Blank'));
const Error404Page = lazy(() => import('../../pages/Error404'));
const HomePage = lazy(() => import('../../pages/Home'));
const LoginPage = lazy(() => import('../../pages/Login'));
const LogoutPage = lazy(() => import('../../pages/Logout'));
const PageA = lazy(() => import('../../pages/PageA'));
const PrivatePage = lazy(() => import('../../pages/Private'));
const RequireAuth = lazy(() => import('../RequireAuth'));
const SubPage = lazy(() => import('../../pages/Subpage'));
const UsersPage = lazy(() => import('../../pages/Users'));
const UserPage = lazy(() => import('../../pages/Users/User'));
const EditUserPage = lazy(() => import('../../pages/Users/User/Edit'));
const NewUserPage = lazy(() => import('../../pages/Users/New'));

const routes = [
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
        element: <UsersPage />,
        path: '/users',
      },
      {
        element: <NewUserPage />,
        path: '/users/new',
      },
      {
        element: <UserPage />,
        path: '/users/:userId',
      },
      {
        element: <EditUserPage />,
        path: '/users/:userId/edit',
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
] satisfies RouteObject[];

const router = createBrowserRouter(routes);

function Router(): JSX.Element {
  return <RouterProvider router={router} />;
}

export { routes };
export default Router;
