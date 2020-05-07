import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LanguageSwitch from '../../components/LanguageSwitch';
import Main from '../../components/Main';
import Navigation from '../../components/Navigation';
import LANGUAGES from '../../constants/languages';
import ROUTES from '../../constants/routes';

const { INDEX, PAGE_A, PAGE_B } = ROUTES;

const DefaultLayout: React.FC = (props) => {
  return (
    <>
      <Header>
        <Navigation routes={{ INDEX, PAGE_A, PAGE_B }} />
        <LanguageSwitch languages={LANGUAGES} />
      </Header>
      <Main {...props} />
      <Footer>Footer</Footer>
    </>
  );
};

export default DefaultLayout;
