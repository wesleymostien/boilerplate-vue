import importAll from '@/script/util/import';

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
	defaultLocale: null,
	fallbackLocale: null,
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

		// Set as default locale?
		if (Object.prototype.hasOwnProperty.call(imprt, 'defaultLocale')) {
			locale.defaultLocale = imprt.id;
		}

		// Set as fallback locale?
		if (Object.prototype.hasOwnProperty.call(imprt, 'fallbackLocale')) {
			locale.fallbackLocale = imprt.id;
		}
	});

// No default locale -> set first locale as default.
if (locale.id.length > 0) {
	locale.defaultLocale = locale.defaultLocale || locale.id[0];
}

/* ---------------------------------------------------------------------------------------------- */

export default locale;
