import React from 'react';
import { RouteProps } from 'react-router-dom';
import Seo from '../../components/Seo';

function PageA(_props: RouteProps): JSX.Element {
  return (
    <>
      <Seo title="Page A" />
      <h1>Page A</h1>
    </>
  );
}

export default PageA;
