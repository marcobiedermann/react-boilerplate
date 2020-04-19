import PropTypes from 'prop-types';
import React from 'react';

const Footer = (props) => {
  const { children } = props;

  return <footer>{children}</footer>;
};

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.defaultProps = {
  children: null,
};

export default Footer;
