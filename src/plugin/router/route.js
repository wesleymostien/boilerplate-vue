// Code splitting: dynamically load components.
const Crypto = () => import('@/page/Crypto');
const Home = () => import('@/page/Home');

/* ---------------------------------------------------------------------------------------------- */

const joinPaths = (...arrPaths) => '/' + arrPaths.join('/');

/* ---------------------------------------------------------------------------------------------- */

const routeNames = {
	crypto: 'crypto',
	home: 'home',
};

const route = {};

/* ---------------------------------------------------------------------------------------------- */

// Home
route.home = {
	component: Home,
	name: routeNames.home,
	path: '*',
	url: '/',
};

// Crypto
route.crypto = {
	component: Crypto,
	name: routeNames.crypto,
	path: joinPaths(routeNames.crypto),
	url: joinPaths(routeNames.crypto),
};

/* ---------------------------------------------------------------------------------------------- */

export default route;
