<template>
	<v-app-bar class="app-bar" app clipped-left>
		<v-app-bar-nav-icon color="white" @click="toggleNavDrawer" />

		<router-link :to="route.home.url" tag="div">
			<v-toolbar-title>{{ title }}</v-toolbar-title>
		</router-link>
	</v-app-bar>
</template>

/* ---------------------------------------------------------------------------------------------- */

<script>
import { mapActions } from 'vuex';
import { ACTION } from '@/store';
import CONFIG from '%/config';
import route from '@/plugin/router/route';

export default {
	name: 'AppBar',

	data() {
		return {
			route,
			title: CONFIG.PROJECT.TITLE,
		};
	},

	methods: {
		...mapActions([ACTION.APP.UPDATE_NAV_DRAWER]),

		toggleNavDrawer() {
			this[ACTION.APP.UPDATE_NAV_DRAWER]();
		},
	},
};
</script>
