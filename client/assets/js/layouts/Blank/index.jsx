import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../../components/Footer';
import Main from '../../components/Main';

const BlankLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </>
  );
};

BlankLayout.propTypes = {
  children: PropTypes.node,
};

BlankLayout.defaultProps = {
  children: null,
};

export default BlankLayout;
