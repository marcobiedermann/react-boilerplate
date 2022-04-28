import React, { ReactNode } from 'react';
import AuthProvider from '../../context/auth';

interface ProvidersProps {
  children: ReactNode;
}

function Providers(props: ProvidersProps): JSX.Element {
  const { children } = props;

  return <AuthProvider>{children}</AuthProvider>;
}

export type { ProvidersProps };
export default Providers;
