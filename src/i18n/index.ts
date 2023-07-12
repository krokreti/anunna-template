import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import EnTranslation from '../locales/en-us.json';
import PtTranslation from '../locales/pt-pt.json';

export const defaultNS = 'translation';

const resources = {
    en: {
        translation: EnTranslation,
    },
    pt: {
        translation: PtTranslation,
    },
};

const i18nConfig = {
    resources: resources,
    fallbackLng: 'en',
    // lng: 'en',
    defaultNS: defaultNS,
    interpolation: {
        escapeValue: false
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(i18nConfig)

export default i18n;