function camelCaseToKebabCase (input) {
  return input.replaceAll(/[A-Z]/g, match => '-' + match.toLowerCase())
}

module.exports = camelCaseToKebabCase
