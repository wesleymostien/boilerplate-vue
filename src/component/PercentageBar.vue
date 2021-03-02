<template>
	<div class="percentage-bar">
		<div class="percentage-bar__indicator" :style="`--width:${value};`" />
	</div>
</template>

/* ---------------------------------------------------------------------------------------------- */

<script>
export default {
	name: 'PercentageBar',

	props: {
		value: {
			type: Number,
			default: 0,
		},
	},

	data() {
		return {};
	},
};
</script>
