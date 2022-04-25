import React, { ReactNode } from 'react';

export interface LoaderProps {
  children: ReactNode;
}

function Loader(props: LoaderProps): JSX.Element {
  return <div {...props} />;
}

export default Loader;
