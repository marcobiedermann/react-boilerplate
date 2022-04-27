import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './components/Root';
import './i18n';

Sentry.init({
  dsn: 'https://96e995fc8aec42be8a7a5ef7c3b51afb@o81678.ingest.sentry.io/6365383',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

createRoot(document.getElementById('root')!).render(<Root />);
