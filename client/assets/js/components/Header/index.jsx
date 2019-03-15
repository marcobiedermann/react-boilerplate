import PropTypes from 'prop-types';
import React from 'react';

const Header = (props) => {
  const { children } = props;

  return (
    <header>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
