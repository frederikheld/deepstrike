/**
 * This function turns an input string that is in kebab-case
 * into an output string that is in camelCase.
 *
 * @param {String} input string in kebab-case
 * @returns {String} // string in camelCase
 */
function kebabCaseToCamelCase (input) {
  return input.replaceAll(/-./g, match => match[1].toUpperCase())
}

module.exports = kebabCaseToCamelCase
