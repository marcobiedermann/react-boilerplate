import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LanguageSwitch from '../../components/LanguageSwitch';
import Main from '../../components/Main';
import Navigation from '../../components/Navigation';
import LANGUAGES from '../../constants/languages';
import { INDEX, PAGE_A, PAGE_B } from '../../constants/pages';

const DefaultLayout: React.FC = (props) => {
  return (
    <>
      <Header>
        <Navigation pages={[INDEX, PAGE_A, PAGE_B]} />
        <LanguageSwitch languages={LANGUAGES} />
      </Header>
      <Main {...props} />
      <Footer>Footer</Footer>
    </>
  );
};

export default DefaultLayout;
