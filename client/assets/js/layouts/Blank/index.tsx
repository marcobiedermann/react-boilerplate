import React from 'react';
import Footer from '../../components/Footer';
import Main from '../../components/Main';

const BlankLayout: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <Main>{children}</Main>
      <Footer>Footer</Footer>
    </>
  );
};

export default BlankLayout;
