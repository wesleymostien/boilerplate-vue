<template>
	<div :class="['app-container', { '--centered': centered }]">
		<div v-if="title" class="container__header">
			<h3 class="container__title">
				<span v-if="$te(title)">{{ $t(title) }}</span>
				<span v-else>{{ title }}</span>
			</h3>
		</div>
		<div v-if="hasSlot('default')" :class="['container__content']">
			<slot />
		</div>
	</div>
</template>

/* ---------------------------------------------------------------------------------------------- */

<script>
import { hasSlot } from '@/script/util';

export default {
	name: 'Container',
	props: {
		centered: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: null,
		},
	},

	data() {
		return {
			hasSlot,
		};
	},
};
</script>
