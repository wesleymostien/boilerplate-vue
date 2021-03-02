<template>
	<div class="page--home">
		<container title="welcome">
			This is an introduction to Vue.js.
		</container>

		<container title="Centered container" centered>
			<v-img src="@/asset/image/logo.png" max-width="25%" />
		</container>
	</div>
</template>

/* ---------------------------------------------------------------------------------------------- */

<script>
export default {
	name: 'PageHome',

	data() {
		return {};
	},
};
</script>
