import React from 'react';
import { Link } from 'react-router-dom';

interface Route {
  path: string;
  name: string;
}

export interface NavigationProps {
  routes: Route[];
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const { routes } = props;

  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
