import {memoize} from 'lodash';
import i18n from 'i18n-js';
import {translationGetters} from '@resources';

export type Keys = keyof typeof translationGetters.en;
export type LanguageTag = 'en';

export const translate = memoize((key: Keys) => i18n.t(key));

export const configTranslation = (languageTag: LanguageTag | string) => {
  translate.cache.clear();
  i18n.translations = {[languageTag]: translationGetters[languageTag]};
  i18n.locale = languageTag;
};
