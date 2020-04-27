import PropTypes from 'prop-types';
import React from 'react';
import ROUTES from '../../constants/routes';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import Navigation from '../Navigation';

const { INDEX, PAGE_A, PAGE_B } = ROUTES;

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <Header>
        <Navigation routes={[INDEX, PAGE_A, PAGE_B]} />
      </Header>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
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
