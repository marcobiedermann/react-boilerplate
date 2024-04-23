import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

function Main(props: MainProps): JSX.Element {
  return <main {...props} />;
}

export type { MainProps };
export default Main;
