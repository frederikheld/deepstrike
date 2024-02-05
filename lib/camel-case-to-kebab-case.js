/**
 * This function turns an input string that is in camelCase
 * into an output string that is in kebab-case.
 *
 * @param {String} input string in camelCase
 * @returns {String} // string in kebab-case
 * @throws TypeError if the input string is not in proper camelCase
 */
function camelCaseToKebabCase (input) {
  if (input.length > 0 && !input[0].match(/\p{Ll}/u)) {
    throw TypeError('Input is not valid camelCase!')
  }

  return input.replaceAll(/\p{Lu}/gu, match => '-' + match.toLowerCase())
}

module.exports = camelCaseToKebabCase
