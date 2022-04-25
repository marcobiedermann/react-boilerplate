import React, { ReactNode } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LanguageSwitch from '../../components/LanguageSwitch';
import Main from '../../components/Main';
import Navigation from '../../components/Navigation';
import LANGUAGES from '../../constants/languages';
import { INDEX, PAGE_A, PAGE_B } from '../../constants/pages';

export interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <>
      <Header>
        <Navigation pages={[INDEX, PAGE_A, PAGE_B]} />
        <LanguageSwitch languages={LANGUAGES} />
      </Header>
      <Main>
        <Breadcrumb routes={[INDEX, PAGE_A, PAGE_B]} />
        {children}
      </Main>
      <Footer>Footer</Footer>
    </>
  );
}

export default DefaultLayout;
