import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import importAll from '@/script/util/import';
import { _MUTATION, ACTION } from '@/store/_store';

/* ---------------------------------------------------------------------------------------------- */

// Register all base components globally.
const imports = importAll(
	require.context(
		// The relative path of the folder to import from.
		'@/store/',
		// Look in subfolders?
		true,
		// The regular expression used to match filenames.
		/\.store.js/,
	),
);

const modules = {};
Object.entries(imports).map(([filename, imprt]) => {
	// Get store module name.
	const storeModuleName = filename.split('/').pop().replace('.store.js', '');
	// Add store module.
	modules[storeModuleName] = imprt;
});

/* ---------------------------------------------------------------------------------------------- */

Vue.use(Vuex);

/* ---------------------------------------------------------------------------------------------- */

export default new Vuex.Store({
	actions: {
		[ACTION.RESET_STATE]({ commit }) {
			Object.entries(modules).forEach(([key, value]) => {
				if (value.mutations[_MUTATION.RESET_STATE]) {
					commit(`${key}/${_MUTATION.RESET_STATE}`);
				}
			});
		},
	},
	modules,
	plugins: [createPersistedState()],
	strict: process.env.NODE_ENV !== `production`,
});
