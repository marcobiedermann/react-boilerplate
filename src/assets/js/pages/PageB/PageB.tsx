import React from 'react';
import { RouteProps } from 'react-router-dom';
import Seo from '../../components/Seo';

function PageB(_props: RouteProps): JSX.Element {
  return (
    <>
      <Seo title="Page B" />
      <h1>Page B</h1>
    </>
  );
}

export default PageB;
