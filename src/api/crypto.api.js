import { API, apiCoingecko } from '.';

/* ---------------------------------------------------------------------------------------------- */

export const apiCrypto = {
	[API.CRYPTO.FETCH]: () => {
		return apiCoingecko.get(`coins/markets?vs_currency=usd&order=market_cap_desc`);
	},
};
