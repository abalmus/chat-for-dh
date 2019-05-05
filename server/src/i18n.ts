import i18n from 'i18next';
import Backend from 'i18next-node-fs-backend';

i18n
  .use(Backend)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    backend: {
        loadPath: './server/locales/{{lng}}/{{ns}}.json'
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
