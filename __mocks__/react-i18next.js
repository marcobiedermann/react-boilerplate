const React = require('react');
const reactI18next = require('react-i18next');

const useMock = [(k) => k, {}];

useMock.t = (k) => k;
useMock.i18n = {};

module.exports = {
  useTranslation: () => useMock,
  I18nextProvider: reactI18next.I18nextProvider,
  initReactI18next: reactI18next.initReactI18next,
  setDefaults: reactI18next.setDefaults,
  getDefaults: reactI18next.getDefaults,
  setI18n: reactI18next.setI18n,
  getI18n: reactI18next.getI18n,
};
