<template>
	<v-card v-disabled-focus class="card-crypto" :ripple="false" @click="toggleCard">
		<div class="card__header">
			<v-chip label small class="chip">{{ symbol }}</v-chip>
			<v-chip
				label
				small
				:class="[
					'chip',
					'chip--last-update',
					{
						'--updated': isUpdated,
					},
				]"
			>
				<v-icon left small>$mdiHistory</v-icon>
				{{ lastUpdated }}
			</v-chip>
			<span class="rank">#{{ coin.market_cap_rank }}</span>
		</div>

		<div class="card__content">
			<div class="content__left">
				<v-avatar size="32" class="card__icon">
					<img :src="coin.image" />
				</v-avatar>

				<div class="card__title">
					{{ coin.name }}
				</div>
			</div>

			<div class="content__right">
				<div class="card__price">
					{{ parsePrice(coin.current_price) }}
				</div>
				<div class="card__price-change">
					<span class="label">24h</span>
					<percentage-change boxed :value="coin.price_change_percentage_24h" />
				</div>
			</div>
		</div>

		<v-expand-transition>
			<div v-show="showExtraInfo">
				<v-divider />

				<div class="card__extra">
					<div>
						<span class="label">Market cap</span>
						<span class="amount">{{ parsePrice(coin.market_cap) }}</span>
						<percentage-change :value="coin.market_cap_change_percentage_24h" />
					</div>
					<div>
						<span class="label">Volume</span>
						<span class="amount">{{ parsePrice(coin.total_volume) }}</span>
					</div>
					<div class="supply">
						<span class="label">Circulating supply</span>
						<span class="amount">
							{{ formatNumber(coin.circulating_supply, 0) }}
							{{ symbol }}
						</span>

						<div v-if="supplyPercentage" class="percentage">
							<span class="label">{{ supplyPercentage }} %</span>
							<percentage-bar :value="supplyPercentage" />
						</div>

						<div class="supply__rows">
							<div class="supply__row">
								<span class="label">Max supply</span>
								<span class="amount --small">
									{{ formatNumber(coin.max_supply, 0) }}
								</span>
							</div>

							<div class="supply__row">
								<span class="label">Total supply</span>
								<span class="amount --small">
									{{ formatNumber(coin.total_supply, 0) }}
								</span>
							</div>
						</div>
					</div>
					<div>
						<span class="label">All time high</span>
						<span class="amount">{{ parsePrice(coin.ath) }}</span>
						<percentage-change :value="coin.ath_change_percentage" />
					</div>
				</div>
			</div>
		</v-expand-transition>
	</v-card>
</template>

/* ---------------------------------------------------------------------------------------------- */

<script>
import PercentageBar from '@/component/PercentageBar';
import PercentageChange from '@/component/PercentageChange';

export default {
	name: 'CardCrypto',
	components: {
		PercentageBar,
		PercentageChange,
	},

	props: {
		coin: {
			type: Object,
			default: () => {},
		},
	},

	data() {
		return {
			isUpdated: false,
			showExtraInfo: true,
		};
	},

	computed: {
		lastUpdated() {
			const date = new Date(this.coin.last_updated);
			const options = {
				day: '2-digit',
				hour: '2-digit',
				hour12: false,
				minute: '2-digit',
				month: '2-digit',
				second: '2-digit',
				year: 'numeric',
			};
			return new Intl.DateTimeFormat('nl-BE', options).format(date);
		},

		supplyPercentage() {
			if (!(this.coin.circulating_supply && this.coin.max_supply)) {
				return;
			}
			const percentage = (this.coin.circulating_supply / this.coin.max_supply) * 100;
			return +percentage.toFixed(2);
		},

		symbol() {
			return this.coin.symbol.toUpperCase();
		},
	},

	watch: {
		coin(newValue, oldValue) {
			this.isUpdated = false;

			if (newValue.last_updated !== oldValue.last_updated) {
				console.log('coin updated: ', this.coin.id);
				this.isUpdated = true;
			}
		},
	},

	methods: {
		formatNumber(_num, round = null) {
			if (!_num) {
				return '--';
			}

			const num = round != null ? +_num.toFixed(round) : _num;
			return num.toLocaleString('en', {
				maximumFractionDigits: 6,
			});
		},

		parsePrice(price) {
			return `$${this.formatNumber(price)}`;
		},

		toggleCard() {
			this.showExtraInfo = !this.showExtraInfo;
		},
	},
};
</script>
