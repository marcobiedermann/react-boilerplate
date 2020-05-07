import React from 'react';
import { RouteProps } from 'react-router-dom';
import Seo from '../../components/Seo';

const IndexPage: React.FC<RouteProps> = () => {
  return (
    <>
      <Seo title="Home" />
      <h1>Index Page</h1>
    </>
  );
};

export default IndexPage;
