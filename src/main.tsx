import * as Sentry from '@sentry/react';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import Root from './components/Root';
import './i18n';
import './index.css';
import { isDevelopment } from './utilities/environment';

async function enableMocking(): Promise<ServiceWorkerRegistration | undefined> {
  if (!isDevelopment) {
    return Promise.resolve(undefined);
  }

  const { worker } = await import('./mocks/browser');

  return worker.start();
}

Sentry.init({
  dsn: 'https://96e995fc8aec42be8a7a5ef7c3b51afb@o81678.ingest.sentry.io/6365383',
  integrations: [
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
  ],
});

enableMocking()
  .then(() => {
    createRoot(document.getElementById('root')!).render(<Root />);
  })
  .catch((error) => console.log({ error }));
