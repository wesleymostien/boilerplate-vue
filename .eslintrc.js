const path = require('path');

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},

	extends: [
		'eslint:recommended',
		'plugin:promise/recommended',
		'plugin:vue/recommended',
		'plugin:import/errors',
		'plugin:prettier/recommended',
		'prettier',
		'prettier/vue',
	],

	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
	},

	plugins: [
		'import', //
		'prettier',
		'promise',
		'vue',
		'vuetify',
	],

	rules: {
		/* -------------------------------------------------------------------------------------- */
		// eslint-plugin-import
		// don't require extension when importing
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				scss: 'never',
				vue: 'never',
			},
		],
		'import/no-named-as-default-member': 0,
		'import/prefer-default-export': 0,

		/* -------------------------------------------------------------------------------------- */
		// eslint-plugin-prettier
		'prettier/prettier': ['error'],

		/* -------------------------------------------------------------------------------------- */
		// eslint-plugin-vue
		'vue/sort-keys': [
			'error',
			'asc',
			{
				caseSensitive: true, //
				natural: true,
			},
		],

		/* -------------------------------------------------------------------------------------- */
		// eslint
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'lines-around-comment': [
			'error',
			{
				beforeBlockComment: true,
				afterBlockComment: true,
				beforeLineComment: false,
				afterLineComment: false,
				allowBlockStart: true,
				allowBlockEnd: true,
				allowObjectStart: true,
				allowObjectEnd: true,
				allowArrayStart: true,
				allowArrayEnd: true,
				ignorePattern: '\\*',
			},
		],
		'prefer-arrow-callback': 'error',
	},

	settings: {
		'import/resolver': {
			webpack: { config: path.resolve('./config/webpack/webpack.babel.js') },
		},
	},
};
