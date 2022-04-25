import React from 'react';
import PAGES from '../../constants/pages';
import Router from '../Router';

function Root(): JSX.Element {
  return <Router pages={PAGES} />;
}

export default Root;
