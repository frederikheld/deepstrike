function camelCaseToKebabCase (input) {
  if (input.length > 0 && !input[0].match(/[a-z]/)) {
    throw TypeError('Input is not valid camelCase!')
  }

  return input.replaceAll(/[A-Z]/g, match => '-' + match.toLowerCase())
}

module.exports = camelCaseToKebabCase
