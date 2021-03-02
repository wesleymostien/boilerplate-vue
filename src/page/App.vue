<template>
	<div :id="$styles.namespace">
		<v-app :class="[$styles.selectorApp]">
			<app-bar />
			<navigation />

			<v-main :class="`${$styles.selectorApp}__main`">
				<v-container class="app__content" fluid>
					<router-view />
				</v-container>
			</v-main>
		</v-app>
	</div>
</template>

/* ---------------------------------------------------------------------------------------------- */

<script>
import AppBar from '@/component/AppBar';
import Navigation from '@/component/Navigation';

export default {
	name: 'App',
	components: {
		AppBar,
		Navigation,
	},
};
</script>
