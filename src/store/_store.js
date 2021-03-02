const parseModules = (types, prefix = false, suffix = '') => {
	const newObj = Object.entries(types).reduce((newObj, [key, value]) => {
		newObj[key] =
			typeof value !== 'object'
				? (prefix ? prefix + '/' : '') + value + suffix
				: parseModules(value, prefix && key.toLowerCase(), suffix);
		return newObj;
	}, {});

	return newObj;
};

const TYPE = {
	ACTION: 'Action',
	GETTER: 'Getter',
	MUTATION: 'Mutation',
};

/* ---------------------------------------------------------------------------------------------- */

const getters = {
	APP: {
		NAV_DRAWER: 'navDrawer',
	},
	CRYPTO: {
		COINS: 'coins',
	},
};

export const _GETTER = getters;
export const GETTER = parseModules(getters, true);

/* ---------------------------------------------------------------------------------------------- */

const mutations = {
	APP: {
		NAV_DRAWER: 'navDrawer',
	},
	CRYPTO: {
		COINS: 'coins',
	},
};

export const _MUTATION = parseModules(mutations, false, TYPE.MUTATION);
export const MUTATION = parseModules(mutations, true, TYPE.MUTATION);

/* ---------------------------------------------------------------------------------------------- */

const actions = {
	APP: {
		UPDATE_NAV_DRAWER: 'updateNavDrawer',
	},
	CRYPTO: {
		FETCH: 'fetch',
	},
};

export const _ACTION = parseModules(actions, false, TYPE.ACTION);
export const ACTION = parseModules(actions, true, TYPE.ACTION);
