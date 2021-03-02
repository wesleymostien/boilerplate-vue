import VARS from './vars';

/* ---------------------------------------------------------------------------------------------- */

export default {
	// Backend API settings.
	API: {
		COINGECKO: 'https://api.coingecko.com/api/v3',
	},
	// Use cleaner and formatted logging for Webpack dev server?
	FRIENDLY_LOGGING: true,
	// Hot module reloading?
	HMR: true,
	// Host url for development.
	HOST: 'localhost',
	// Open the browser after server had been started? Set it to true to open your default browser.
	// Provide browser name to use instead of the default one.
	// The browser application name is platform dependent. (Chrome' is 'Google Chrome' on macOS, 'google-chrome' on Linux and 'chrome' on Windows.)
	OPEN: false,
	// Port number to start the development server on.
	PORT: 3000,
	// Settings to be used inside this project.
	PROJECT: {
		// Title for this project (used for HTML title).
		TITLE: 'Boilerplate',
	},
	// Protocol to use for development servers.
	PROTOCOL: VARS.PROTOCOL.HTTP,
	// Sass files to prepend before the actual entry files (to use Sass variables, functions, mixins, ... in Vue components).
	// SASS_FILES: ['abstract'],
};
