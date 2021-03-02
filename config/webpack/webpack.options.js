import autoprefixer from 'autoprefixer';
import path from 'path';
import webpack from 'webpack';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import PreloadWebpackPlugin from 'preload-webpack-plugin';
import SvgSpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import { VuetifyLoaderPlugin } from 'vuetify-loader';

import CONFIG from '../config';
import VARS from '../vars';

/* ---------------------------------------------------------------------------------------------- */
/* https://webpack.js.org/loaders */

// Preprocess files with loaders. This allows to bundle any static resource.
const LOADERS = {
	// Transpiling JavaScript files.
	// https://github.com/babel/babel-loader
	BABEL: {
		loader: 'babel-loader',
		options: {
			cacheDirectory: true, // cache the results of the loader
		},
	},

	// Collect CSS from all css files and put it into a string.
	// https://github.com/webpack-contrib/css-loader
	CSS: (env = null) => ({
		loader: 'css-loader',
		options: {
			sourceMap: env === VARS.ENV.DEV,
		},
	}),

	// Linting JavaScript files.
	// https://github.com/webpack-contrib/eslint-loader
	ESLINT: {
		loader: 'eslint-loader',
		options: {
			// cache: true, // enable caching of the linting results into a file, useful in reducing linting time when doing a full build
		},
	},

	// Extract fonts.
	// https://webpack.js.org/loaders/file-loader/
	FONT: {
		loader: 'file-loader',
		options: {
			esModule: false,
			name: '[name].[ext]',
			outputPath: VARS.DIR.FONTS,
		},
	},

	// Minifies images.
	// https://github.com/tcoopman/image-webpack-loader
	IMAGE: {
		loader: 'image-webpack-loader',
		options: {
			disable: true, // webpack@2.x and newer
		},
	},

	// Extracts CSS into separate files.
	// https://github.com/webpack-contrib/mini-css-extract-plugin
	MINI_CSS_EXTRACT: (/* env = null */) => ({
		loader: MiniCssExtractPlugin.loader,
	}),

	// Process CSS with PostCSS.
	// https://github.com/postcss/postcss-loader
	POSTCSS: (env = null) => ({
		loader: 'postcss-loader',
		options: {
			ident: 'postcss',
			plugins: () => [
				// Add vendor prefixes to CSS rules.
				// https://github.com/postcss/autoprefixer
				// Online tester: https://autoprefixer.github.io/
				autoprefixer,
			],
			sourceMap: env === VARS.ENV.DEV,
		},
	}),

	// Resolves relative paths in url() statements based on the original source file.
	// https://github.com/bholloway/resolve-url-loader
	RESOLVE_URL: {
		loader: 'resolve-url-loader',
	},

	// Compile Sass / SCSS to CSS.
	// https://github.com/webpack-contrib/sass-loader
	SASS: (env = null /* , type = null */) => {
		const loader = {
			loader: 'sass-loader',
			options: {
				sourceMap: env === VARS.ENV.DEV,
			},
		};

		// if (type === VARS.TYPE.SASS) {
		// 	loader.options.sassOptions = {
		// 		indentedSyntax: true,
		// 	};
		// }

		// if (type === VARS.TYPE.SCSS) {
		// 	loader.options.additionalData = CONFIG.SASS_FILES.map(
		// 		(src) =>
		// 			`@import "${VARS.DIR.ALIAS.SOURCE}/${VARS.DIR.ASSET}/${VARS.DIR.STYLE}/${src}";`,
		// 	).join('\n');
		// }

		return loader;
	},

	// Inject CSS into the DOM.
	// https://github.com/webpack-contrib/style-loader
	STYLE: {
		loader: 'style-loader',
	},

	// Creating SVG sprites.
	// https://github.com/JetBrains/svg-sprite-loader
	SVG_SPRITE: {
		loader: 'svg-sprite-loader',
		options: {
			symbolId: (_filePath) => {
				// Remove extension.
				const filePath = _filePath.split('.').slice(0, -1).join('.');
				// Set directory that contains the icons,
				const dirSrc = path.resolve(
					VARS.DIR.ROOT,
					VARS.DIR.SOURCE,
					VARS.DIR.ASSET,
					VARS.DIR.ICON,
				);
				return path.relative(dirSrc, filePath).split(path.sep).join('.');
			},
		},
	},

	// Transforms files (images) into base64 URIs.
	// https://github.com/webpack-contrib/url-loader
	URL: {
		loader: 'url-loader',
		options: {
			esModule: false,
			// Images larger than 10 KB won’t be inlined.
			limit: 10 * 1024,
			name: 'img/[name].[hash:7].[ext]',
		},
	},

	// Allows to author Vue components in a format called Single-File Components (SFCs).
	// https://github.com/vuejs/vue-loader
	VUE: {
		loader: 'vue-loader',
		options: {
			loaders: {},
			transformAssetUrls: {
				img: ['src', ':src'],
				'v-img': ['src', ':src'],
			},
		},
	},
};

/* ---------------------------------------------------------------------------------------------- */
/* https://webpack.js.org/configuration/plugins/ */

// Additional plugins to customize the webpack build.
const PLUGINS = {
	// Plugin to remove your build folders before building.
	// https://github.com/johnagan/clean-webpack-plugin
	CLEAN: new CleanWebpackPlugin({
		dry: false, // don't simulate the removal of files
	}),

	// Prepare compressed versions of assets to serve them.
	// https://github.com/webpack-contrib/compression-webpack-plugin
	COMPRESSION: new CompressionPlugin({
		algorithm: 'gzip',
		filename: '[path].gz[query]',
		minRatio: 0.8,
		test: new RegExp('\\.(css|html|js|svg|ttf|woff|woff2)$'),
		threshold: 10240,
	}),

	// Allows to create global constants which can be configured at compile time.
	// https://webpack.js.org/plugins/define-plugin/
	DEFINE: (constants) => new webpack.DefinePlugin(constants),

	// Treats a file with the name of directory as the index file.
	// https://github.com/shaketbaby/directory-named-webpack-plugin
	DIRECTORY_NAMED: new DirectoryNamedWebpackPlugin({
		exclude: /node_modules/,
		honorIndex: true, // if 'index.js' exists, this should be used as entry file instead of the file with the same name of directory

		// Function to provide custom transforms of resolving directory name.
		transformFn: (dirName) => {
			return [dirName, `_${dirName}`, `__${dirName}`];
		},
	}),

	// Improves logging for the Webpack dev server.
	// https://github.com/geowarin/friendly-errors-webpack-plugin
	FRIENDLY_ERRORS: new FriendlyErrorsPlugin({
		compilationSuccessInfo: {
			messages: [`Project is running at ${CONFIG.PROTOCOL}://${CONFIG.HOST}:${CONFIG.PORT}`],
		},
	}),

	// Causes hashes to be based on the relative path of the module, generating a four character string as the module id.
	// https://webpack.js.org/plugins/hashed-module-ids-plugin/
	HASHED_MODULE_IDS: new webpack.HashedModuleIdsPlugin(),

	// Simplifies creation of HTML files to serve bundles.
	// https://github.com/jantimon/html-webpack-plugin
	HTML: new HtmlPlugin({
		template: path.resolve(VARS.DIR.ROOT, VARS.DIR.PUBLIC, `${VARS.FILE.INDEX}`),
		title: CONFIG.PROJECT.TITLE,
	}),

	// Extracts CSS into separate files.
	// https://github.com/webpack-contrib/mini-css-extract-plugin
	MINI_CSS_EXTRACT: new MiniCssExtractPlugin({
		chunkFilename: `${VARS.DIR.STYLE}/[id].[contenthash].css`,
		filename: `${VARS.DIR.STYLE}/[name].[contenthash].css`,
		ignoreOrder: true,
	}),

	// A Webpack plugin to optimize \ minimize CSS assets.
	// https://github.com/NMFR/optimize-css-assets-webpack-plugin
	OPTIMIZE_CSS: new OptimizeCssAssetsPlugin({
		cssProcessorPluginOptions: {
			preset: ['default', { discardComments: { removeAll: true } }],
		},
	}),

	// A Webpack plugin for injecting <link rel='preload|prefetch'> into HtmlWebpackPlugin pages.
	// https://github.com/GoogleChromeLabs/preload-webpack-plugin
	PRELOAD: new PreloadWebpackPlugin({
		as: 'font',
		fileWhitelist: [/\.(woff2|eot|ttf|otf)(\?.*)?$/i],
		include: 'allAssets',
		rel: 'preload',
	}),

	// Linting SASS / CSS files.
	// https://github.com/webpack-contrib/stylelint-webpack-plugin
	STYLELINT: new StyleLintPlugin({
		files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
	}),

	// Creating SVG sprites.
	// https://github.com/JetBrains/svg-sprite-loader
	SVG_SPRITE: new SvgSpriteLoaderPlugin(),

	// This plugin uses terser to minify JavaScript.
	// https://github.com/webpack-contrib/terser-webpack-plugin
	TERSER: new TerserPlugin({
		// cache: true, // enable file caching
		parallel: true, // use multi-process parallel running to improve the build speed
		sourceMap: true, // use source maps to map error message locations to modules
		terserOptions: {
			compress: {
				drop_console: true, // discard calls to console.* functions
			},
		},
	}),

	// Allows you to author Vue components in a format called Single-File Components (SFCs).
	// https://github.com/vuejs/vue-loader
	VUE_LOADER: new VueLoaderPlugin(),

	// Will automatically import all Vuetify components as you use them.
	// https://github.com/vuetifyjs/vuetify-loader
	VUETIFY_LOADER: new VuetifyLoaderPlugin(),
};

/* ---------------------------------------------------------------------------------------------- */
/* https://webpack.js.org/configuration/stats */

// Control what bundle information gets displayed.
const STATS = {
	all: false, // fallback value for undefined stats options
	builtAt: false, // add the build date and the build time information
	colors: true, // output in the different colors
	errors: true, // display the errors
	excludeModules: [
		// exclude information of the matching modules
		/node_modules/,
		/(webpack)/,
		(moduleSource) => !moduleSource,
	],
	maxModules: Infinity, // maximum number of modules to be shown
	modules: true, // add information about the built modules
	timings: true, // add the timing information
	warnings: true, // add warnings
};

/* ---------------------------------------------------------------------------------------------- */

export default {
	LOADERS,
	PLUGINS,
	STATS,
};
