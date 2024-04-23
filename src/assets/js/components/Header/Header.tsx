import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

function Header(props: HeaderProps): JSX.Element {
  return <header {...props} />;
}

export type { HeaderProps };
export default Header;
