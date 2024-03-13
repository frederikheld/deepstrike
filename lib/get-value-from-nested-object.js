/**
 * This function takes a nested object and a path to a value
 * in that object. It recursively traverses the object to
 * find the value at that path. If a key on the path does not
 * exist in the object, the function returns `undefined`.
 *
 * Example:
 *   const obj = { foo: { bar: { baz: 'hello' } } }
 *   const value = getObjectValueByPath(obj, 'foo.bar.baz')
 *   // `value` will be 'hello'
 *
 * @param {obj} object // object to traverse
 * @param {path} string // path to value
 * @returns {any} // returns the value that was found or `undefined`
 */
function getValueFromNestedObject (obj, path) {
  const keys = (() => {
    if (Array.isArray(path)) return path
    return path.split('.')
  })()

  const key = keys.shift()

  if (keys.length < 1) {
    // found value at last key:
    return obj[key]
  } else if (typeof obj[key] === 'object') {
    // found next level:
    return getValueFromNestedObject(obj[key], keys)
  }

  // can't recurse further because next key does not exist:
  return undefined
}

module.exports = getValueFromNestedObject
