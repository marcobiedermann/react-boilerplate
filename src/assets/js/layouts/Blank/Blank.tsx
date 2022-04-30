import { Outlet } from 'react-router-dom';
import Main from '../../components/Main';

function BlankLayout(): JSX.Element {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}

export default BlankLayout;
