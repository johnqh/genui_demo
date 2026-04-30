import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import appEn from '../public/locales/en/app.json';
import howtoEn from '../public/locales/en/howto.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation: {},
      app: appEn,
      howto: howtoEn,
    },
  },
  ns: ['translation', 'app', 'howto'],
  defaultNS: 'app',
  interpolation: { escapeValue: false },
});

export default i18n;
