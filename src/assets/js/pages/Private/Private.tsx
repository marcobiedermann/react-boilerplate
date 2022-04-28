import React from 'react';
import { RouteProps } from 'react-router-dom';
import Seo from '../../components/Seo';

function PrivatePage(_props: RouteProps): JSX.Element {
  return (
    <>
      <Seo title="Private Page" />
      <h1>Private Page</h1>
    </>
  );
}

export default PrivatePage;
