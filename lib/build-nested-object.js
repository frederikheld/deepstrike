'use strict'

/**
 * This function takes a key nesting scheme in the form of
 * 'foo.bar.baz' and a value 'something' and returns an
 * object with the structure
 * {
 *   foo:
 *     bar:
 *       baz: 'something'
 * }
 *
 * The nesting scheme can be in form of a String
 * 'foo.bar.baz' or Array ['foo', 'bar', 'baz']
 *
 * It can be used to set config keys for example.
 *
 * The third parameter should not be used but exists only
 * to allow for the recursive nature of this function!
 *
 * @param {String, Array} keyScheme
 * @param {*} value
 * @returns {Object}
 */
const buildNestedObject = function (keyScheme, value, object = {}) {
  if (typeof keyScheme === 'string') {
    keyScheme = keyScheme.split('.')
  }

  const key = keyScheme.pop()
  object[key] = value
  if (keyScheme.length > 0) {
    return buildNestedObject(keyScheme, object)
  } else {
    return object
  }
}

module.exports = buildNestedObject
