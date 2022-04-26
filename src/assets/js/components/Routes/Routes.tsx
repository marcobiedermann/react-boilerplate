import { useRoutes, RouteObject } from 'react-router-dom';

interface RoutesProps {
  routes: RouteObject[];
}

function Routes(props: RoutesProps): JSX.Element {
  const { routes } = props;

  return useRoutes(routes)!;
}

export type { RoutesProps };
export default Routes;
