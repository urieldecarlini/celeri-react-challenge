import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from '../../assets/i18n/es.json';

const LANGUAGES_FILES = {
  es: { translation: es }
};

const defaultLanguage = 'es';

i18n.use(initReactI18next).init({
  resources: LANGUAGES_FILES,
  lng: defaultLanguage,
  react: {
    useSuspense: false
  },
  interpolation: {
    escapeValue: false
  },
  compatibilityJSON: 'v3'
});

export default i18n;
