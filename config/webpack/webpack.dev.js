import path from 'path';

import CONFIG from '../config';
import VARS from '../vars';
import WEBPACK_OPTIONS from './webpack.options';

/* ---------------------------------------------------------------------------------------------- */

export default () => ({
	// Webpack-dev-server provides a simple web server and the ability to use live reloading.
	// https://webpack.js.org/configuration/dev-server/
	devServer: {
		// Messages for console in browser DevTools.
		clientLogLevel: 'warn',
		// Enable gzip compression for everything served.
		compress: true,
		// Tell the server where to serve content from. Only necessary if you want to serve static files.
		contentBase: path.resolve(VARS.DIR.PUBLIC),
		disableHostCheck: true,
		// Use the HTML5 History API.
		historyApiFallback: true,
		// Specify the host to use.
		host: CONFIG.HOST,
		// Enable webpack's Hot Module Replacement feature.
		hot: CONFIG.HMR,
		// Serve over https?
		https: CONFIG.PROTOCOL === VARS.PROTOCOL.HTTPS,
		// A script will be inserted in the bundle to take care of live reloading, and build messages will appear in the browser console.
		inline: true,
		// Supress messages like the webpack bundle information. Errors and warnings will still be shown.
		noInfo: CONFIG.FRIENDLY_LOGGING,
		// Open the browser after server had been started?
		open: CONFIG.OPEN,
		// Shows a full-screen overlay in the browser when there are compiler errors or warnings.
		overlay: true,
		// Specify a port number to listen for requests on.
		port: CONFIG.PORT,
		// Shows nothing except the initial startup information. This also means that errors or warnings from webpack are not visible.
		quiet: CONFIG.FRIENDLY_LOGGING,
		// Control what bundle information gets displayed.
		//stats: WEBPACK_OPTIONS.STATS,
	},

	// Controls if and how source maps are generated.
	// https://webpack.js.org/configuration/devtool/
	devtool: 'eval-cheap-source-map',

	// Tell Webpack to use its built-in optimizations accordingly.
	// https://webpack.js.org/configuration/mode/
	mode: 'development',

	// Webpack runs optimizations depending on the chosen mode, still all optimizations are available for manual configuration and overrides.
	// https://webpack.js.org/configuration/optimization/
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
		},
	},

	// How and where to output bundles, assets and anything else bundled or loaded with Webpack.
	// https://webpack.js.org/configuration/output/
	output: {
		chunkFilename: `${VARS.DIR.SCRIPT}/[id].chunk.js`,
		filename: `${VARS.DIR.SCRIPT}/[name].bundle.js`,
	},

	// Additional plugins to customize the webpack build.
	// https://webpack.js.org/configuration/plugins/
	plugins: [
		CONFIG.FRIENDLY_LOGGING ? WEBPACK_OPTIONS.PLUGINS.FRIENDLY_ERRORS : null, //
	].filter(Boolean),
});
