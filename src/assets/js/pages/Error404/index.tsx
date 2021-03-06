import React from 'react';
import { RouteProps } from 'react-router-dom';
import Seo from '../../components/Seo';

const Error404: React.FC<RouteProps> = () => {
  return (
    <>
      <Seo title="Error 404" />
      <h1>Error 404</h1>
    </>
  );
};

export default Error404;
