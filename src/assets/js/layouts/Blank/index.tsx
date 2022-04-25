import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Main from '../../components/Main';

function BlankLayout(): JSX.Element {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
      <Footer>Footer</Footer>
    </>
  );
}

export default BlankLayout;
