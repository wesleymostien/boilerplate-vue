import { _ACTION, _GETTER, _MUTATION } from '@/store';

/* ---------------------------------------------------------------------------------------------- */

const getDefaultState = () => {
	return {
		[_GETTER.APP.NAV_DRAWER]: false,
	};
};

const state = getDefaultState();

/* ---------------------------------------------------------------------------------------------- */

const getters = {
	[_GETTER.APP.NAV_DRAWER]: (state) => {
		return state[_GETTER.APP.NAV_DRAWER];
	},
};

/* ---------------------------------------------------------------------------------------------- */

const mutations = {
	[_MUTATION.APP.NAV_DRAWER](state, value) {
		state[_GETTER.APP.NAV_DRAWER] = value;
	},
};

/* ---------------------------------------------------------------------------------------------- */

const actions = {
	[_ACTION.APP.UPDATE_NAV_DRAWER]({ commit, getters }, open = null) {
		if (open == null) {
			open = !getters[_GETTER.APP.NAV_DRAWER];
		}

		commit(_MUTATION.APP.NAV_DRAWER, open);
	},
};

/* ---------------------------------------------------------------------------------------------- */

export default {
	actions,
	getters,
	mutations,
	namespaced: true,
	state,
};
