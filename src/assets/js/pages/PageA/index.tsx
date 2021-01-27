import React from 'react';
import { RouteProps } from 'react-router-dom';
import Seo from '../../components/Seo';

const PageA: React.FC<RouteProps> = () => {
  return (
    <>
      <Seo title="Page A" />
      <h1>Page A</h1>
    </>
  );
};

export default PageA;
