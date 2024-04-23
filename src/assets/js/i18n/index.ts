import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { isDevelopment } from '../utilities/environment';

const options = {
  debug: isDevelopment,
  fallbackLng: 'en',
  lng: 'en',
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(options);

export { options };
export default i18n;
