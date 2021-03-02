import Vue from 'vue';

import '@/script/directive';

import App from '@/page/App';
import i18n from '@/plugin/i18n';
import router from '@/plugin/router';
import vuetify from '@/plugin/vuetify';
import vuex from '@/plugin/vuex';

import importAll from '@/script/util/import';
import styles from '@/asset/style';

/* ---------------------------------------------------------------------------------------------- */

// Register all base components globally.
const imports = importAll(
	require.context(
		// The relative path of the folder to import from.
		'@/component/base/',
		// Look in subfolders?
		true,
		// The regular expression used to match filenames.
		/\.vue/,
	),
);

Object.entries(imports)
	// Filter out compoments without a 'name' property.
	.filter(([, imprt]) => Object.prototype.hasOwnProperty.call(imprt, 'name'))
	.map(([filename, imprt]) => {
		// Get component name.
		const componentName = filename
			.split('/')
			.pop()
			.replace(/\.\w+$/, '');

		// Register component globally
		Vue.component(componentName, imprt);
	});

/* ---------------------------------------------------------------------------------------------- */

// Import all SVG files to create SVG sprite (svg-sprite-loader).
importAll(
	require.context(
		// The relative path of the folder to import from.
		'../asset/icon/',
		// Look in subfolders?
		true,
		// The regular expression used to match filenames.
		/\.svg/,
	),
);

/* ---------------------------------------------------------------------------------------------- */

// Suppress development warning in browser console.
Vue.config.productionTip = false;
// Suppress devtools log in browser console.
Vue.config.devtools = process.env.NODE_ENV !== `production`;
// Set exported sass variables to global Vue variable.
Vue.prototype.$styles = styles;

/* ---------------------------------------------------------------------------------------------- */

// Start Vue application by creating a new Vue instance.
new Vue({
	el: '#app', // Provide the Vue instance an existing DOM element to mount on. It can be a CSS selector string or an actual HTMLElement.
	render: (h) => h(App), // Render given component (in HTML element of 'el' property).

	// Extra plugins.
	i18n,
	router,
	store: vuex,
	vuetify,
});
