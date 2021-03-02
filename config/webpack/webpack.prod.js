import VARS from '../vars';
import WEBPACK_OPTIONS from './webpack.options';

/* ---------------------------------------------------------------------------------------------- */

export default () => ({
	// Controls if and how source maps are generated.
	// https://webpack.js.org/configuration/devtool/
	devtool: 'nosources-source-map',

	// Tell Webpack to use its built-in optimizations accordingly.
	// https://webpack.js.org/configuration/mode/
	mode: 'production',

	// Optimize assets.
	// https://webpack.js.org/configuration/optimization/
	optimization: {
		// Minimize the bundle using the TerserPlugin or the plugin(s) specified in optimization.minimizer.
		minimize: true,
		// Override the default minimizer.
		minimizer: [
			WEBPACK_OPTIONS.PLUGINS.TERSER, //
			WEBPACK_OPTIONS.PLUGINS.OPTIMIZE_CSS,
		],
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: 'initial',
					maxInitialRequests: 5,
					minChunks: 2,
					minSize: 0,
				},
				styles: {
					chunks: 'all',
					enforce: true,
					name: 'styles',
					test: /\.css$/,
				},
				vendor: {
					chunks: 'all',
					name: (module) => {
						const packageName = module.context.match(
							/[\\/]node_modules[\\/](.*?)([\\/]|$)/,
						)[1];
						return `npm.${packageName.replace('@', '')}`;
					},
					test: /[\\/]node_modules[\\/]/,
				},
			},
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
		},
	},

	// How and where to output bundles, assets and anything else bundled or loaded with Webpack.
	// https://webpack.js.org/configuration/output/
	output: {
		chunkFilename: `${VARS.DIR.SCRIPT}/[id].[contenthash].chunk.js`,
		filename: `${VARS.DIR.SCRIPT}/[name].[contenthash].js`,
	},

	// Additional plugins to customize the webpack build.
	// https://webpack.js.org/configuration/plugins/
	plugins: [
		WEBPACK_OPTIONS.PLUGINS.MINI_CSS_EXTRACT,
		WEBPACK_OPTIONS.PLUGINS.COMPRESSION,
		WEBPACK_OPTIONS.PLUGINS.HASHED_MODULE_IDS,
	],
});
