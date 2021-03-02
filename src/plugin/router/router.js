import Vue from 'vue';
import VueRouter from 'vue-router';

import route from '@/plugin/router/route';

/* ---------------------------------------------------------------------------------------------- */

Vue.use(VueRouter);

const routes = [
	{
		...route.home,
	},
	{
		...route.crypto,
	},
];

const router = new VueRouter({
	linkActiveClass: 'active', // Globally configure <router-link> default active class.
	mode: 'history', // Configure the router mode.
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
});

/* ---------------------------------------------------------------------------------------------- */

export default router;
