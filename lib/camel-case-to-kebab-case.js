function camelCaseToKebabCase (input) {
  if (input.length > 0 && !input[0].match(/\p{Ll}/u)) {
    throw TypeError('Input is not valid camelCase!')
  }

  return input.replaceAll(/\p{Lu}/gu, match => '-' + match.toLowerCase())
}

module.exports = camelCaseToKebabCase
