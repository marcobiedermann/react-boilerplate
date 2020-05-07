import React from 'react';
import Footer from '../../components/Footer';
import Main from '../../components/Main';

const BlankLayout: React.FC = (props) => {
  return (
    <>
      <Main {...props} />
      <Footer>Footer</Footer>
    </>
  );
};

export default BlankLayout;
