'use strict'

module.exports = {
  buildNestedObject: require('./lib/build-nested-object'),
  patchObject: require('./lib/patch-object'),
  patchObjectInPlace: require('./lib/patch-object-in-place'),
  roundPrecisely: require('./lib/round-precisely'),
  median: require('./lib/median'),
  generateCode: require('./lib/generate-code'),
  range: require('./lib/range'),
  kebabCaseToCamelCase: require('./lib/kebab-case-to-camel-case'),
  kebabCaseToPascalCase: require('./lib/kebab-case-to-pascal-case'),
  camelCaseToKebabCase: require('./lib/camel-case-to-kebab-case'),
  getValueFromNestedObject: require('./lib/get-value-from-nested-object')
}
