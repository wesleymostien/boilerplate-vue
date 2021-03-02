<template>
	<div class="page-title">
		<div class="page-title__left">
			<h3 class="page-title__text">{{ title }}</h3>
			<slot />
		</div>

		<slot name="toolbar" />
	</div>
</template>

/* ---------------------------------------------------------------------------------------------- */

<script>
export default {
	name: 'PageTitle',

	props: {
		title: {
			type: String,
			default: '',
		},
	},

	data() {
		return {};
	},
};
</script>
