import importAll from '../../script/util/import';

/* ---------------------------------------------------------------------------------------------- */

// Polyfill for 'require.context'.
if (typeof require.context === 'undefined') {
	const fs = require('fs');
	const path = require('path');

	require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
		const files = {};

		function readDirectory(directory) {
			fs.readdirSync(directory).forEach((file) => {
				const fullPath = path.resolve(directory, file);

				if (fs.statSync(fullPath).isDirectory()) {
					if (scanSubDirectories) readDirectory(fullPath);

					return;
				}

				if (!regularExpression.test(fullPath)) return;

				files[fullPath] = true;
			});
		}

		readDirectory(path.resolve(__dirname, base));

		function Module(file) {
			return require(file);
		}

		Module.keys = () => Object.keys(files);

		return Module;
	};
}

/* ---------------------------------------------------------------------------------------------- */

// Import all locale files in this folder.
const imports = importAll(
	require.context(
		// The relative path of the folder to import from.
		'./locale',
		// Look in subfolders?
		false,
		// The regular expression used to match filenames
		/\.js$/,
	),
	false,
);

const locale = {
	id: [],
	messages: {},
	name: {},
};
Object.values(imports)
	// Filter out objects without an 'id' or 'messages' key.
	.filter(
		(imprt) =>
			Object.prototype.hasOwnProperty.call(imprt, 'id') &&
			Object.prototype.hasOwnProperty.call(imprt, 'messages'),
	)
	.map((imprt) => {
		locale.id.push(imprt.id.toUpperCase());
		locale.name[imprt.id] = imprt.name;
		locale.messages[imprt.id] = imprt.messages;
	});

/* ---------------------------------------------------------------------------------------------- */

const optionIssueKey = {
	empty: 'empty',
	missing: 'missing',
};

const keys = {};
const setKeys = new Set();

// Define unique locale keys.
for (const objLocale of Object.values(locale.messages)) {
	Object.keys(objLocale).forEach(setKeys.add, setKeys);
}

// Set keys for possible errors.
[...setKeys].sort().map((key) => {
	keys[key] = {};
	Object.keys(optionIssueKey).map((keyIssue) => {
		keys[key][keyIssue] = [];
	});
});

// Check if each locale has all unique keys.
for (const [keyLocale, objLocale] of Object.entries(locale.messages)) {
	Object.keys(keys).map((key) => {
		if (!Object.keys(objLocale).includes(key)) {
			keys[key][optionIssueKey.missing].push(keyLocale);
		} else if (objLocale[key].toString().trim() === '') {
			keys[key][optionIssueKey.empty].push(keyLocale);
		}
	});
}

// Check if there are keys with empty strings.
const keysEmpty = {};
Object.keys(keys).map((key) => {
	if (keys[key][optionIssueKey.empty].length > 0) {
		keysEmpty[key] = keys[key][optionIssueKey.empty];
	}
});

// Check if there are missing keys.
const keysMissing = {};
Object.keys(keys).map((key) => {
	if (keys[key][optionIssueKey.missing].length > 0) {
		keysMissing[key] = keys[key][optionIssueKey.missing];
	}
});

// Check on errors.
let error = false;

if (Object.keys(keysEmpty).length > 0) {
	console.warn('✖ ERROR: i18n files: empty keys in language files!\n', keysEmpty, '\n\n');
}
if (Object.keys(keysMissing).length > 0) {
	console.error('✖ ERROR: i18n files: missing keys in language files!\n', keysMissing, '\n\n');
	error = true;
}

if (error) {
	process.exit(2);
}
