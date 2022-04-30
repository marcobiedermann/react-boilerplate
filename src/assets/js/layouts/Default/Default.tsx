import { Outlet } from 'react-router-dom';
import AuthStatus from '../../components/AuthStatus';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LanguageSwitch from '../../components/LanguageSwitch';
import Main from '../../components/Main';
import Navigation from '../../components/Navigation';
import LANGUAGES from '../../constants/languages';
import { INDEX, LOGIN, LOGOUT, PAGE_A, PRIVATE } from '../../constants/pages';

function DefaultLayout(): JSX.Element {
  return (
    <>
      <Header>
        <Navigation pages={[INDEX, PAGE_A, PRIVATE, LOGIN, LOGOUT]} />
        <LanguageSwitch languages={LANGUAGES} />
        <AuthStatus />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>Footer</Footer>
    </>
  );
}

export default DefaultLayout;
