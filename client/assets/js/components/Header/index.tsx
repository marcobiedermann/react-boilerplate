import React from 'react';

const Header: React.FC = (props) => {
  const { children } = props;

  return <header>{children}</header>;
};

export default Header;
