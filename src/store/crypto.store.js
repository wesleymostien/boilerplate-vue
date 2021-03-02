import { _ACTION, _GETTER, _MUTATION } from '@/store';
import TYPE from '@/script/type';

import { API } from '@/api';
import { apiCrypto } from '@/api/crypto.api';

/* ---------------------------------------------------------------------------------------------- */

const getDefaultState = () => {
	return {
		[_GETTER.CRYPTO.COINS]: null,
	};
};

const state = getDefaultState();

/* ---------------------------------------------------------------------------------------------- */

const getters = {
	[_GETTER.CRYPTO.COINS]: (state) => ({ filterCapSize = [], reverseOrder = false } = {}) => {
		let coins = state[_GETTER.CRYPTO.COINS];

		const defineCapSize = (cap) => {
			if (cap > 10000000000) {
				return TYPE.COIN_CAP_SIZE.LARGE;
			} else if (cap > 1000000000) {
				return TYPE.COIN_CAP_SIZE.MID;
			} else {
				return TYPE.COIN_CAP_SIZE.SMALL;
			}
		};

		if (filterCapSize?.length < Object.values(TYPE.COIN_CAP_SIZE).length) {
			coins = coins.filter((coin) => filterCapSize.includes(defineCapSize(coin.market_cap)));
		}

		return reverseOrder ? coins.slice().reverse() : coins;
	},
};

/* ---------------------------------------------------------------------------------------------- */

const mutations = {
	[_MUTATION.CRYPTO.COINS](state, value) {
		state[_GETTER.CRYPTO.COINS] = value;
	},
};

/* ---------------------------------------------------------------------------------------------- */

const actions = {
	async [_ACTION.CRYPTO.FETCH]({ commit }) {
		const response = await apiCrypto[API.CRYPTO.FETCH]();
		commit(_MUTATION.CRYPTO.COINS, response.data);
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
