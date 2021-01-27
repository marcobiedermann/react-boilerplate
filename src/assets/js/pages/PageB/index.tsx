import React from 'react';
import { RouteProps } from 'react-router-dom';
import Seo from '../../components/Seo';

const PageB: React.FC<RouteProps> = () => {
  return (
    <>
      <Seo title="Page B" />
      <h1>Page B</h1>
    </>
  );
};

export default PageB;
