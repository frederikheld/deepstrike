/**
 * This function turns an input string that is in kebab-case
 * into an output string that is in pascalCase.
 *
 * @param {String} input string in kebab-case
 * @returns {String} // string in pascalCase
 */
function kebabCaseToCamelCase (input) {
  return input.replaceAll(/-./g, match => match[1].toUpperCase())
}

module.exports = kebabCaseToCamelCase
