import { useRoutes, RouteObject } from 'react-router-dom';

export interface RoutesProps {
  routes: RouteObject[];
}

function Routes(props: RoutesProps): JSX.Element {
  const { routes } = props;
  const element = useRoutes(routes);

  return element;
}

export default Routes;
