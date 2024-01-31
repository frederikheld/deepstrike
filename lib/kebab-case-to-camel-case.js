function kebabCaseToCamelCase (input) {
  return input.replaceAll(/-./g, match => match[1].toUpperCase())
}

module.exports = kebabCaseToCamelCase
