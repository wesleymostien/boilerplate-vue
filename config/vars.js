/* ---------------------------------------------------------------------------------------------- */
// Directories.
export const DIR = {};

// Directory that holds all assets.
DIR.ASSET = 'asset';
// Directory that holds all components.
DIR.COMPONENT = 'component';
// Directory that holds config files.
DIR.CONFIG = 'config';
// Directory that holds distribution / built files.
DIR.DIST = 'dist';
// Directory that holds fonts.
DIR.FONT = 'font';
// Directory that holds icons.
DIR.ICON = 'icon';
// Directory that holds images.
DIR.IMAGE = 'image';
// Directory that holds public files.
DIR.PUBLIC = 'public';
// Root directory of project.
DIR.ROOT = process.cwd();
// Directory name that holds script files.
DIR.SCRIPT = 'script';
// Source directory of project.
DIR.SOURCE = 'src';
// Directory that holds all style files.
DIR.STYLE = 'style';

// Directory aliases.
DIR.ALIAS = {};
// Alias for config directory of project.
DIR.ALIAS.CONFIG = '%';
// Alias for source directory of project.
DIR.ALIAS.SOURCE = '@';
// Alias for source directory of project.
DIR.ALIAS.STYLE = '~';

/* ---------------------------------------------------------------------------------------------- */
// Possible environments.
export const ENV = {
	DEV: 'development',
	PROD: 'production',
};

/* ---------------------------------------------------------------------------------------------- */
// Files.
export const FILE = {
	APP: 'app.js',
	INDEX: 'index.html',
};

/* ---------------------------------------------------------------------------------------------- */
// Possible protocols.
export const PROTOCOL = {
	HTTP: 'http',
	HTTPS: 'https',
};

/* ---------------------------------------------------------------------------------------------- */
// Possible general types.
export const TYPE = {
	SASS: 'sass',
	SCSS: 'scss',
};

/* ---------------------------------------------------------------------------------------------- */

export default {
	DIR,
	ENV,
	FILE,
	PROTOCOL,
	TYPE,
};
