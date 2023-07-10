import resources from './resources';
import { defaultNS } from '../i18n/index';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: typeof defaultNS;
        resources: typeof resources;
    }
}