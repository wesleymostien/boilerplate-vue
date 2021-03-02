import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import * as icons from './vuetify-icon';

import styles from '@/asset/style';

/* ---------------------------------------------------------------------------------------------- */

Vue.use(Vuetify);

const opts = {
	icons: {
		iconfont: 'mdiSvg',
		values: icons,
	},

	theme: {
		themes: {
			light: {
				accent: styles.colorAccent,
				disabled: styles.colorGrey5,
				error: styles.colorStateError,
				info: styles.colorStateInfo,
				primary: styles.colorPrimary,
				success: styles.colorStateSuccess,
				warning: styles.colorStateWarning,
			},
		},
	},
};

const vuetify = new Vuetify(opts);

/* ---------------------------------------------------------------------------------------------- */

export default vuetify;
