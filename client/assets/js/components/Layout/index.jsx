import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <Header>
        Header
      </Header>
      {children}
      <Footer>
        Footer
      </Footer>
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
