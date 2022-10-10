/**
 * This function is a shorthand to create an array that can be
 * iterated with `forEach()` or similar functions
 *
 * Usage:
 *  range(10).forEach((item, index) => {
 *    console.log(index)
 *  })
 *
 * @param {Number} length
 * @returns {Array} Iterable array
 */
function range (length) {
  return (new Array(length)).fill()
}

module.exports = range
