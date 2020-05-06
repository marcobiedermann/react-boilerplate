import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants/routes';

export interface NavigationMenuProps {
  routes: Routes;
}

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
  const { routes } = props;

  return (
    <ul>
      {Object.entries(routes).map(([key, value]) => (
        <li key={key}>
          <Link to={value.path}>{value.name}</Link>

          {value.routes && <NavigationMenu routes={value.routes} />}
        </li>
      ))}
    </ul>
  );
};

export interface NavigationProps {
  routes: Routes;
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
