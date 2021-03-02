<template>
	<div :class="['percentage-change', { '--boxed': boxed }, { '--positive': isPositive }]">
		<v-icon class="percentage-change__icon">
			{{ isPositive ? '$mdiMenuUp' : '$mdiMenuDown' }}
		</v-icon>
		{{ roundedValue }} %
	</div>
</template>

/* ---------------------------------------------------------------------------------------------- */

<script>
export default {
	name: 'PercentageChange',

	props: {
		boxed: {
			type: Boolean,
			default: false,
		},
		value: {
			type: Number,
			default: 0,
		},
	},

	data() {
		return {};
	},

	computed: {
		isPositive() {
			return this.value > 0;
		},

		roundedValue() {
			return this.value.toFixed(2);
		},
	},
};
</script>
