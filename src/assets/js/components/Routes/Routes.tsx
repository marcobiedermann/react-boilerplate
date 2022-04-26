import { useRoutes, RouteObject } from 'react-router-dom';

interface RoutesProps {
  routes: RouteObject[];
}

function Routes(props: RoutesProps): JSX.Element {
  const { routes } = props;
  const element = useRoutes(routes);

  return element;
}

export type { RoutesProps };
export default Routes;
