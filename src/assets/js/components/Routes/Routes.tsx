import { RouteObject, useRoutes } from 'react-router-dom';

interface Route extends RouteObject {
  children?: Route[];
  title?: string;
}

interface RoutesProps {
  routes: Route[];
}

function Routes(props: RoutesProps): JSX.Element {
  const { routes } = props;

  return useRoutes(routes)!;
}

export type { RoutesProps, Route };
export default Routes;
