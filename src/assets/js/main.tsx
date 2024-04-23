import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { createRoot } from 'react-dom/client';
import '../css/styles.css';
import Root from './components/Root';
import './i18n';
import { environment, isDevelopment } from './utilities/environment';

async function enableMocking(): Promise<ServiceWorkerRegistration | undefined> {
  if (!isDevelopment) {
    return Promise.resolve(undefined);
  }

  const { worker } = await import('../../mocks/browser');

  return worker.start();
}

Sentry.init({
  dsn: 'https://96e995fc8aec42be8a7a5ef7c3b51afb@o81678.ingest.sentry.io/6365383',
  environment,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

enableMocking()
  .then(() => {
    createRoot(document.getElementById('root')!).render(<Root />);
  })
  .catch((error) => console.log({ error }));
