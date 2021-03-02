<template>
	<div class="page--crypto">
		<page-title title="Cryptos">
			<v-chip color="primary" small>#{{ coins.length }}</v-chip>

			<template #toolbar>
				<v-toolbar class="toolbar" content-class="abra">
					<v-switch
						v-model="reverseOrder"
						color="accent"
						hide-details
						label="Reverse order"
					/>

					<v-btn-toggle v-model="filterCapSize" color="accent" mandatory dense multiple>
						<v-btn :value="TYPE.COIN_CAP_SIZE.LARGE">
							Large cap
						</v-btn>
						<v-btn :value="TYPE.COIN_CAP_SIZE.MID">
							Mid cap
						</v-btn>
						<v-btn :value="TYPE.COIN_CAP_SIZE.SMALL">
							Small cap
						</v-btn>
					</v-btn-toggle>

					<v-btn icon tile color="accent" @click="fetchCoins">
						<v-icon>$mdiRefresh</v-icon>
					</v-btn>
				</v-toolbar>
			</template>
		</page-title>

		<CardCrypto v-for="coin in coins" :key="`coin-${coin.id}`" :coin="coin" />
	</div>
</template>

/* ---------------------------------------------------------------------------------------------- */

<script>
import { mapActions, mapGetters } from 'vuex';
import { ACTION, GETTER } from '@/store';
import TYPE from '@/script/type';

import CardCrypto from '@/component/CardCrypto';

export default {
	name: 'PageCrypto',
	components: {
		CardCrypto,
	},

	data() {
		return {
			GETTER,
			TYPE,

			filterCapSize: [...Object.values(TYPE.COIN_CAP_SIZE)],
			reverseOrder: false,
		};
	},

	computed: {
		...mapGetters([GETTER.CRYPTO.COINS]),

		coins() {
			return this[GETTER.CRYPTO.COINS]({
				filterCapSize: this.filterCapSize,
				reverseOrder: this.reverseOrder,
			});
		},
	},

	watch: {
		sorting(newValue, oldValue) {
			console.log('sorting(newValue, oldValue): ', newValue, oldValue);
		},
	},

	beforeCreate: function () {
		console.log('Component beforeCreate:', this.$options.name);
	},

	created: function () {
		console.log('Component created:', this.$options.name);
	},

	beforeMount: function () {
		console.log('Component beforeMount:', this.$options.name);
	},

	mounted: function () {
		console.log('Component mounted:', this.$options.name);
		this.fetchCoins();
	},

	beforeUpdate: function () {
		console.log('Component beforeUpdate:', this.$options.name);
	},

	updated: function () {
		console.log('Component updated:', this.$options.name);
	},

	beforeDestroy: function () {
		console.log('Component beforeDestroy:', this.$options.name);
	},

	destroyed: function () {
		console.log('Component destroyed:', this.$options.name);
	},

	methods: {
		...mapActions([ACTION.CRYPTO.FETCH]),

		fetchCoins() {
			this[ACTION.CRYPTO.FETCH]();
		},
	},
};
</script>
