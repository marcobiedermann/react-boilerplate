import React, { ReactNode } from 'react';
import Footer from '../../components/Footer';
import Main from '../../components/Main';

export interface BlankLayoutProps {
  children: ReactNode;
}

function BlankLayout(props: BlankLayoutProps): JSX.Element {
  return (
    <>
      <Main {...props} />
      <Footer>Footer</Footer>
    </>
  );
}

export default BlankLayout;
