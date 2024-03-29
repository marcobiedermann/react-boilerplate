import { NavLink } from 'react-router-dom';
import { Page } from '../../constants/pages';
import useAuth from '../../hooks/auth';

interface NavigationMenuProps {
  pages: Page[];
}

function NavigationMenu(props: NavigationMenuProps): JSX.Element {
  const { pages } = props;
  const { user } = useAuth();

  return (
    <ul>
      {pages
        .filter((page) => !page.isPrivate || user)
        .map((page) => (
          <li key={page.path}>
            <NavLink to={page.path}>{page.name}</NavLink>

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
export { NavigationMenu };
export default Navigation;
