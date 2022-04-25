import React from 'react';
import { RouteProps } from 'react-router-dom';
import Seo from '../../components/Seo';

function IndexPage(_props: RouteProps): JSX.Element {
  return (
    <>
      <Seo title="Home" />
      <h1>Index Page</h1>
    </>
  );
}

export default IndexPage;
