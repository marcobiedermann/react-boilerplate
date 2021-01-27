import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../../constants/pages';

export interface NavigationMenuProps {
  pages: Page[];
}

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
  const { pages } = props;

  return (
    <ul>
      {pages.map((page) => (
        <li key={page.path}>
          <Link to={page.path}>{page.name}</Link>

          {page.pages && <NavigationMenu pages={page.pages} />}
        </li>
      ))}
    </ul>
  );
};

export interface NavigationProps {
  pages: Page[];
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const { pages } = props;

  return (
    <nav>
      <NavigationMenu pages={pages} />
    </nav>
  );
};

export default Navigation;
export { NavigationMenu };
