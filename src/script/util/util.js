/**
 * Parse hex color to rgb color.
 *
 * @param {string} hexColor Hex color.
 * @returns {Object} RGB color.
 */
export const colorHexToRGB = (hexColor) => {
	const COLOR_REGEX = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
	const arrRGB = hexColor.match(COLOR_REGEX);
	if (arrRGB == null) {
		return;
	}

	const r = parseInt(arrRGB[1], 16);
	const g = parseInt(arrRGB[2], 16);
	const b = parseInt(arrRGB[3], 16);

	return { b, g, r };
};

/**
 * Parse rgb color to hex color.
 *
 * @param {number} r Red value of rgb color.
 * @param {number} g Green value of rgb color.
 * @param {number} b Blue value of rgb color.
 * @returns {string} Hex color.
 */
export const colorRGBToHex = (r, g, b) => {
	const formatHex = (value) => {
		value = value + '';
		if (value.length == 1) {
			return '0' + value;
		}
		return value;
	};

	r = Math.min(255, Math.max(0, r));
	g = Math.min(255, Math.max(0, g));
	b = Math.min(255, Math.max(0, b));

	let hexRed = formatHex(r.toString(16));
	let hexGreen = formatHex(g.toString(16));
	let hexBlue = formatHex(b.toString(16));

	return '#' + hexRed + hexGreen + hexBlue;
};

/**
 * Get color value with transparency.
 *
 * @param {string} hexForeground Foreground hex color.
 * @param {string} [hexBackground] Background hex color.
 * @param {number} [opacity] Opacity level.
 * @returns {string} Hex value of transparent color.
 */
export const colorTransparent = ({ hexForeground, hexBackground = '#ffffff', opacity = 1 }) => {
	opacity = Math.min(1, Math.max(0, opacity)) * 1.0;
	const rgbForeground = colorHexToRGB(hexForeground);
	const rgbBackground = colorHexToRGB(hexBackground);

	if (!(rgbForeground && rgbBackground)) {
		return hexForeground;
	}

	const r = Math.round(rgbBackground.r * (1 - opacity) + rgbForeground.r * opacity);
	const g = Math.round(rgbBackground.g * (1 - opacity) + rgbForeground.g * opacity);
	const b = Math.round(rgbBackground.b * (1 - opacity) + rgbForeground.b * opacity);

	return colorRGBToHex(r, g, b);
};

/**
 * Get number of pixels for given rem value.
 *
 * @param {number} rem Number of rem to convert to pixels.
 */
export const convertRemToPixels = (rem) =>
	rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

/**
 * Copy content of HTNL element to clipboard.
 *
 * @param {string} idHtmlElement Id of HTML element that needs to be copied.
 * @param {string} [displayProp] Value to use for CSS display property.
 */
export const copyToClipboard = function (idHtmlElement, displayProp = 'block') {
	const $el = document.getElementById(idHtmlElement);
	if (!$el) {
		return;
	}

	const displayPropPrevious = $el.style.display;
	let range;
	let sel;

	$el.style.display = displayProp;

	if (document.createRange && window.getSelection) {
		range = document.createRange();
		sel = window.getSelection();
		sel.removeAllRanges();
		try {
			range.selectNodeContents($el);
			sel.addRange(range);
		} catch (e) {
			range.selectNode($el);
			sel.addRange(range);
		}
	} else if (document.body.createTextRange) {
		range = document.body.createTextRange();
		range.moveToElementText($el);
		range.select();
	}

	document.execCommand('copy');
	$el.style.display = displayPropPrevious;
	window.getSelection().removeAllRanges();
};

/**
 * Delay execution (like setTimeout).
 *
 * @param {number} [ms] Take default export of modules?
 * @returns {Promise} Returns promise that resolves once timeout is over.
 */
export const delay = (ms = 10) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Handler for paste event.
 *
 * @param {Event} event Paste event.
 * @param {Function} handler Function to pass paste data to.
 */
export const handlePaste = (event, handler) => {
	const clipboardData = event.clipboardData || window.clipboardData;
	handler(clipboardData.getData('text'), event);
};

/**
 * Check if a slot exists in current component.
 *
 * @param {string} id Id of slot to check.
 * @returns {boolean} Slot exists?
 */
export const hasSlot = function (id) {
	return !!this.$slots[id];
};

/**
 * Check if a value is an array.
 *
 * @param {any} value Value to check.
 * @returns {boolean}
 */
export const isArray = (value) => {
	return value instanceof Array;
};

/**
 * Check if a value is a float number.
 *
 * @param {any} value Value to check.
 * @returns {boolean}
 */
export const isFloat = (value) => {
	return +value === value && (!isFinite(value) || !!(value % 1));
};

/**
 * Check if a value is a function.
 *
 * @param {any} fct Value to check.
 * @returns {boolean}
 */
export const isFunction = (fct) => {
	return fct && {}.toString.call(fct) === '[object Function]';
};

/**
 * Check if paste functionality is available in browser.
 *
 * @returns {boolean}
 */
export const isPasteAvailable = () => {
	return navigator.clipboard && navigator.clipboard.readText;
};

/**
 * Check if a value is a string.
 *
 * @param {any} value Value to check.
 * @returns {boolean}
 */
export const isString = (value) => {
	return typeof value === 'string' || value instanceof String;
};

/**
 * Force wait after the next DOM update cycle.
 *
 * @param {boolean} executeVueNextTick Also execute native nextTick from Vue?
 * @returns {Promise}
 */
export const nextTick = async function (executeVueNextTick = true) {
	await new Promise(requestAnimationFrame);
	await delay(0);

	if (executeVueNextTick) {
		await this.$nextTick();
	}
};

/**
 * Parse float number into a string.
 *
 * @param {number} float Number to parse.
 * @param {string} [separator] Character usued as decimal point separator.
 * @returns {(string|null)} Parsed string of float number or null.
 */
export const parseFloatToString = (float, separator = ',') => {
	return isNaN(float) ? null : float.toString().replace(/[.]/g, separator);
};

/**
 * Convert image to Base64 string.
 *
 * @param {string} url Url of image to convert.
 * @returns {Promise} Returns promise that resolves when image is converted.
 */
export const parseImageToBase64 = async (url) => {
	// Is url already a Base64 encoded string?
	if (url.includes(';base64,')) {
		return url;
	}

	// Load url in new image.
	const image = await new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = reject;
		img.src = url;
	});

	// Convert image via canvas.
	const $canvas = document.createElement('canvas');
	$canvas.width = image.width;
	$canvas.height = image.height;

	const ctx = $canvas.getContext('2d');
	ctx.drawImage(image, 0, 0);

	return $canvas.toDataURL('image/jpeg');
};

/**
 * Parse string into a float number.
 *
 * @param {string} txt String to parse.
 * @param {string} [separator] Character usued as decimal point separator.
 * @returns {number} Parsed float number.
 */
export const parseToFloat = (txt, separator = ',') => {
	if (txt == null) {
		return txt;
	}

	const regex = new RegExp(`[${separator}]`, 'g');
	return parseFloat(txt.toString().replace(regex, '.'));
};

/**
 * Parse string into an integer (or null).
 *
 * @param {string} txt String to parse.
 * @param {number} [_maxLength] Maximum allowed length of integer.
 * @returns {(number|null)} Parsed integer or null.
 */
export const parseToInt = (txt, _maxLength = null) => {
	if (txt == null) {
		return txt;
	}

	// Remove all non-digits from text.
	let text = txt.toString().replace(/\D/g, '').trim();

	// If no maximum length is given, take the length of the largest possible safe integer minus 1.
	const maxLength = _maxLength || (Number.MAX_SAFE_INTEGER + '').length - 1;

	// Check if text is longer than maximum allowed length.
	if (maxLength && text.length > maxLength) {
		text = text.substring(0, maxLength);
	}

	// Parse to integer (remove leading zeros).
	text = Number.parseInt(text + '');
	text = isNaN(text) ? null : text;

	return text;
};

/**
 * Paste action with content on clipboard.
 *
 * @param {Function} handler Function to pass paste data to.
 */
export const paste = async (handler) => {
	if (!isPasteAvailable) {
		return;
	}

	const clipText = await navigator.clipboard.readText();
	handler(clipText);
};

/**
 * Pluralize a string with a suffix according to a given number.
 *
 * @param {string} txt String to pluralize.
 * @param {number} [count] Number to check if pluralizing is necessary.
 * @param {string} [suffix] Use this string as suffix to pluralize.
 * @returns {string} Pluralized string.
 */
export const pluralize = (txt, count = 1, suffix = 's') => {
	return `${txt}${count !== 1 ? suffix : ''}`;
};

/**
 * Calculate ratio of a value for a certain minimum and maximum.
 *
 * @param {number} value Value to calculate ratio for.
 * @param {number} min Minimum value in range.
 * @param {number} max Maximum value in range.
 * @returns {number} Ratio percentage.
 */
export const ratio = (value, min, max) => {
	return (value - min) / (max - min);
};

/**
 * Calculate value for a ratio in a range.
 *
 * @param {number} beginRange First value in range.
 * @param {number} endRange Last value in range.
 * @param {number} ratio Ratio of value to get from range.
 * @returns {number} Calculated value.
 */
export const ratioRange = (beginRange, endRange, ratio) => {
	return beginRange + (endRange - beginRange) * (ratio < 0 ? 0 : ratio);
};

/**
 * Replace all types of line breaks in a text with another string.
 *
 * @param {string} txt Text to remove line breaks from.
 * @param {string} replacement String to use as replacement for line breaks.
 * @returns {string} Text without line breaks and newly replaced strings.
 */
export const replaceLineBreaks = (txt, replacement = ' ') => {
	return txt.replace(/(\r\n|\n|\r)/gm, replacement);
};
