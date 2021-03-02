import axios from 'axios';

import CONFIG from '%/config';

/* ---------------------------------------------------------------------------------------------- */

export const apiCoingecko = axios.create({
	baseURL: CONFIG.API.COINGECKO,
});

/* ---------------------------------------------------------------------------------------------- */

export const API = {
	CRYPTO: {
		FETCH: 'fetch',
	},
};
