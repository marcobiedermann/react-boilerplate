import React from 'react';
import PAGES from '../../constants/pages';
import Router from '../Router';

const Root: React.FC = () => {
  return <Router pages={PAGES} />;
};

export default Root;
