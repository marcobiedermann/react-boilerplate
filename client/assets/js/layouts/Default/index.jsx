import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Navigation from '../../components/Navigation';
import ROUTES from '../../constants/routes';

const { INDEX, PAGE_A, PAGE_B } = ROUTES;

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header>
        <Navigation routes={[INDEX, PAGE_A, PAGE_B]} />
      </Header>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

DefaultLayout.defaultProps = {
  children: null,
};

export default DefaultLayout;
