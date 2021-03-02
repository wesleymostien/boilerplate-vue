/**
 * Import all files for given context.
 * @see https://webpack.js.org/guides/dependency-management/#requirecontext
 *
 * @param {RequireContext} requireContext
 * @param {boolean} [importDefault] Take default export of modules?
 * @returns {Object} Object with all imported modules with filenames as keys.
 */
export default (requireContext, importDefault = true) => {
	const imports = {};
	let module;

	requireContext.keys().forEach((fileName) => {
		module = requireContext(fileName);
		imports[fileName] = importDefault ? module.default || module : module;
	});

	return imports;
};
