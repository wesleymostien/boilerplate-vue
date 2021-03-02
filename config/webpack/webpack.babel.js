import { merge } from 'webpack-merge';
import path from 'path';

import webpackConfigDev from './webpack.dev';
import webpackConfigProd from './webpack.prod';

import VARS from '../vars';
import WEBPACK_OPTIONS from './webpack.options';

/* ---------------------------------------------------------------------------------------------- */
// Different Webpack configs for each environment.
const webpackConfig = {
	[VARS.ENV.DEV]: webpackConfigDev,
	[VARS.ENV.PROD]: webpackConfigProd,
};
// Set default environment for Webpack.
let webpackEnv = VARS.ENV.DEV; // development is default

/* ---------------------------------------------------------------------------------------------- */

const PATH = path.resolve(VARS.DIR.ROOT, VARS.DIR.SOURCE);

export default (env, params) => {
	// Is there an environment variable set through CLI ?
	webpackEnv = (!!env && !!env.prod && VARS.ENV.PROD) || webpackEnv;

	// Merge this config with environment specific config.
	return merge(webpackConfig[webpackEnv](params), {
		// The entry object is where webpack looks to start building the bundle.
		// https://webpack.js.org/configuration/entry-context/#entry
		entry: path.join(PATH, VARS.DIR.SCRIPT, VARS.FILE.APP),

		// These options determine how the different types of modules within a project will be treated.
		// https://webpack.js.org/configuration/module/
		module: {
			// Rules which are matched to requests when modules are created. They can apply loaders to the module, or modify the parser.
			// https://webpack.js.org/configuration/module/#modulerules
			rules: [
				{
					// Vue files
					test: /\.vue$/,
					use: [
						WEBPACK_OPTIONS.LOADERS.VUE, //
						WEBPACK_OPTIONS.LOADERS.ESLINT,
					],
				},
				{
					// JavaScript files
					exclude: /node_modules/,
					test: /\.js$/,
					use: [
						WEBPACK_OPTIONS.LOADERS.BABEL, //
						WEBPACK_OPTIONS.LOADERS.ESLINT,
					],
				},
				{
					// Sass files
					test: /\.sass$/,
					use: [
						webpackEnv === VARS.ENV.DEV
							? WEBPACK_OPTIONS.LOADERS.STYLE
							: WEBPACK_OPTIONS.LOADERS.MINI_CSS_EXTRACT(webpackEnv),
						WEBPACK_OPTIONS.LOADERS.CSS(webpackEnv),
						WEBPACK_OPTIONS.LOADERS.POSTCSS(webpackEnv),
						WEBPACK_OPTIONS.LOADERS.SASS(webpackEnv, VARS.TYPE.SASS),
					],
				},
				{
					// SCSS / CSS files
					test: /\.s?css$/,
					use: [
						webpackEnv === VARS.ENV.DEV
							? WEBPACK_OPTIONS.LOADERS.STYLE
							: WEBPACK_OPTIONS.LOADERS.MINI_CSS_EXTRACT(webpackEnv),
						WEBPACK_OPTIONS.LOADERS.CSS(webpackEnv),
						WEBPACK_OPTIONS.LOADERS.POSTCSS(webpackEnv),
						WEBPACK_OPTIONS.LOADERS.RESOLVE_URL,
						WEBPACK_OPTIONS.LOADERS.SASS(webpackEnv, VARS.TYPE.SCSS),
					],
				},
				{
					// Image files
					enforce: 'pre', // this is a pre-loader, which helps reinforce that this must run before normal loaders
					include: path.join(PATH, VARS.DIR.ASSET, VARS.DIR.IMAGE),
					test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
					use: [
						WEBPACK_OPTIONS.LOADERS.URL, //
						WEBPACK_OPTIONS.LOADERS.IMAGE,
					],
				},
				{
					// SVG files
					include: path.join(PATH, VARS.DIR.ASSET, VARS.DIR.ICON),
					test: /\.svg$/,
					use: [WEBPACK_OPTIONS.LOADERS.SVG_SPRITE],
				},
				{
					// Font files.
					include: path.join(PATH, VARS.DIR.ASSET, VARS.DIR.FONT),
					test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
					use: [WEBPACK_OPTIONS.LOADERS.FONT],
				},
			],
		},

		// How and where to output bundles, assets and anything else bundled or loaded with Webpack.
		// https://webpack.js.org/configuration/output/
		output: {
			// The output directory as an absolute path.
			path: path.resolve(VARS.DIR.ROOT, VARS.DIR.DIST),
			// The public URL of the output directory when referenced in a browser.
			publicPath: '/',
		},

		// Customize the Webpack build process in a variety of ways.
		// https://webpack.js.org/configuration/plugins/
		plugins: [
			WEBPACK_OPTIONS.PLUGINS.CLEAN,
			WEBPACK_OPTIONS.PLUGINS.HTML,
			WEBPACK_OPTIONS.PLUGINS.PRELOAD,
			WEBPACK_OPTIONS.PLUGINS.STYLELINT,
			WEBPACK_OPTIONS.PLUGINS.SVG_SPRITE,
			WEBPACK_OPTIONS.PLUGINS.VUE_LOADER,
			WEBPACK_OPTIONS.PLUGINS.VUETIFY_LOADER,
		],

		// These options change how modules are resolved.
		// https://webpack.js.org/configuration/resolve/
		resolve: {
			alias: {
				[`${VARS.DIR.ALIAS.CONFIG}`]: path.resolve(VARS.DIR.ROOT, VARS.DIR.CONFIG),
				[VARS.DIR.ALIAS.SOURCE]: path.resolve(VARS.DIR.ROOT, VARS.DIR.SOURCE),
				[VARS.DIR.ALIAS.STYLE]: path.resolve(
					VARS.DIR.ROOT,
					VARS.DIR.SOURCE,
					VARS.DIR.ASSET,
					VARS.DIR.STYLE,
				),
				vue$: 'vue/dist/vue.esm.js',
			},
			extensions: ['.js', '.scss', '.vue'],
			plugins: [WEBPACK_OPTIONS.PLUGINS.DIRECTORY_NAMED],
		},
	});
};
