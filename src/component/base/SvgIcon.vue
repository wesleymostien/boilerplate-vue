<template>
	<svg :class="classname">
		<use :xlink:href="`#${id}`"></use>
	</svg>
</template>

/* ---------------------------------------------------------------------------------------------- */

<script>
export default {
	name: 'SvgIcon',
	props: {
		classname: {
			type: String,
			default: '',
		},
		id: {
			type: String,
			default: null,
		},
	},
};
</script>
