import React from 'react';
import ROUTES from '../../constants/routes';
import Router from '../Router';

const Root: React.FC = () => {
  return <Router routes={ROUTES} />;
};

export default Root;
