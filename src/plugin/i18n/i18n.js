import Vue from 'vue';
import VueI18n from 'vue-i18n';

import locale from './locale';
import { isString } from '@/script/util';

/* ---------------------------------------------------------------------------------------------- */

Vue.use(VueI18n);

const i18n = new VueI18n({
	fallbackLocale: locale.fallbackLocale, // fallback locale, in case items are not translated in current language
	locale: locale.defaultLocale, // default locale
	messages: locale.messages, // set locale messages
	silentTranslationWarn: true, // suppress warnings outputted when localization fail
});

// Handler for missing localization.
i18n.missing = (locale, key) => {
	return `_! ${key} !_`;
};

// Handler for post processing of translation.
i18n.postTranslation = (value) => {
	return isString(value) ? value.toString().trim() : value;
};

/* ---------------------------------------------------------------------------------------------- */

export default i18n;
