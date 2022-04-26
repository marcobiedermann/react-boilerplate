import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../../constants/pages';

interface NavigationMenuProps {
  pages: Page[];
}

function NavigationMenu(props: NavigationMenuProps): JSX.Element {
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
}

interface NavigationProps {
  pages: Page[];
}

function Navigation(props: NavigationProps): JSX.Element {
  const { pages } = props;

  return (
    <nav>
      <NavigationMenu pages={pages} />
    </nav>
  );
}

export type { NavigationProps, NavigationMenuProps };
export default Navigation;
export { NavigationMenu };
