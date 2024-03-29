import { getYear } from 'date-fns';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AuthStatus from '../../components/AuthStatus';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LanguageSwitch from '../../components/LanguageSwitch';
import Loader from '../../components/Loader';
import Main from '../../components/Main';
import Navigation from '../../components/Navigation';
import LANGUAGES from '../../constants/languages';
import { INDEX, LOGIN, LOGOUT, PAGE_A, PRIVATE, USERS } from '../../constants/pages';
import { NOW } from '../../utilities/date';

function DefaultLayout(): JSX.Element {
  return (
    <>
      <Header>
        <Navigation pages={[INDEX, PAGE_A, PRIVATE, USERS, LOGIN, LOGOUT]} />
        <LanguageSwitch languages={LANGUAGES} />
        <AuthStatus />
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>© {getYear(NOW)} Footer</Footer>
    </>
  );
}

export default DefaultLayout;
