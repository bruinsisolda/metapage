import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../../public/locales/en/translation.json';
import vn from '../../public/locales/vi/translation.json';
import be from '../../public/locales/be/translation.json';
import bz from '../../public/locales/bz/translation.json';
import ca from '../../public/locales/ca/translation.json';
import cd from '../../public/locales/cd/translation.json';
import de from '../../public/locales/de/translation.json';
import fr from '../../public/locales/fr/translation.json';
import ind from '../../public/locales/in/translation.json';
import pk from '../../public/locales/pk/translation.json';
import us from '../../public/locales/us/translation.json';
import it from '../../public/locales/it/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            vn: { translation: en },
            be: { translation: en },
            bz: { translation: en },
            ca: { translation: en },
            cd: { translation: en },
            de: { translation: en },
            fr: { translation: en },
            in: { translation: en },
            pk: { translation: en },
            us: { translation: en }, 
            it: { translation: en },
        },
        fallbackLng: 'en',
        supportedLngs: ['en',],
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
