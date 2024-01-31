const kebabCaseToCamelCase = require('../lib/kebab-case-to-camel-case')

/**
 * This function turns an input string that is in kebab-case
 * into an output string that is in PascalCase.
 *
 * @param {String} input string in kebab-case
 * @returns {String} // string in PascalCase
 */
function kebabCaseToPascalCase (input) {
  return input.charAt(0).toUpperCase() + kebabCaseToCamelCase(input.slice(1))
}

module.exports = kebabCaseToPascalCase
