import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import AuthProvider from '../../context/auth';

export const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}

function Providers(props: ProvidersProps): JSX.Element {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export type { ProvidersProps };
export default Providers;
