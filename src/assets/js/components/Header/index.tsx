import React, { ReactNode } from 'react';

export interface HeaderProps {
  children: ReactNode;
}

function Header(props: HeaderProps): JSX.Element {
  return <header {...props} />;
}

export default Header;
