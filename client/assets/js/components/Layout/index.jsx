import PropTypes from 'prop-types';
import React from 'react';

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
