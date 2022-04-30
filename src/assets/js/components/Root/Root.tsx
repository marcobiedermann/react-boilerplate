import Providers from '../Providers';
import Router from '../Router';

function Root(): JSX.Element {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}

export default Root;
