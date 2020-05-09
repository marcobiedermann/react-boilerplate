import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from '../../constants/routes';

export interface NavigationMenuProps {
  routes: Route[];
}

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
  const { routes } = props;

  return (
    <ul>
      {routes.map((route) => (
        <li key={route.path}>
          <Link to={route.path}>{route.name}</Link>

          {route.routes && <NavigationMenu routes={route.routes} />}
        </li>
      ))}
    </ul>
  );
};

export interface NavigationProps {
  routes: Route[];
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const { routes } = props;

  return (
    <nav>
      <NavigationMenu routes={routes} />
    </nav>
  );
};

export default Navigation;
export { NavigationMenu };
