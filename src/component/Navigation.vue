<template>
	<v-navigation-drawer
		class="navigation__drawer"
		app
		clipped
		:expand-on-hover="!expanded"
		:permanent="$vuetify.breakpoint.mdAndUp"
		:value="visible || expanded"
		@input="setState"
	>
		<v-list nav dense>
			<v-list-item-group>
				<v-list-item
					v-for="item in routes"
					:key="`route-${item.link}`"
					color="accent"
					:to="item.link"
					class="navigation__item"
				>
					<v-list-item-icon class="item__icon">
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-title class="item__title">{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</v-navigation-drawer>
</template>

/* ---------------------------------------------------------------------------------------------- */

<script>
import { mapActions, mapGetters } from 'vuex';
import { ACTION, GETTER } from '@/store';
import route from '@/plugin/router/route';

export default {
	name: 'Navigation',

	data() {
		return {
			routes: [
				{
					icon: '$mdiHome',
					link: route.home.url,
					title: 'Home',
				},
				{
					icon: '$mdiBitcoin',
					link: route.crypto.url,
					title: 'Crypto',
				},
			],
			visible: null,
		};
	},

	computed: {
		...mapGetters([GETTER.APP.NAV_DRAWER]),

		expanded() {
			return this[GETTER.APP.NAV_DRAWER];
		},
	},

	methods: {
		...mapActions([ACTION.APP.UPDATE_NAV_DRAWER]),

		setState(open) {
			this.visible = open;

			if (!open) {
				this[ACTION.APP.UPDATE_NAV_DRAWER](open);
			}
		},
	},
};
</script>
