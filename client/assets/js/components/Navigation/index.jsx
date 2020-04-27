import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  const { routes } = props;

  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

Navigation.defaultProps = {
  routes: [],
};

export default Navigation;
