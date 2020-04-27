import React, { Suspense } from 'react';
import Router from '../Router';

const Root = () => {
  return (
    <Suspense fallback={<div>Loading …</div>}>
      <Router />
    </Suspense>
  );
};

export default Root;
