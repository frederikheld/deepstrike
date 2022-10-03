'use strict'

const { roundPrecisely } = require('../index')

/**
 * Scales the given `value` from the input range
 * defined by `inMin` and `inMax` to the output
 * range defined by `outMin` and `outMax`.
 *
 * The parameter `precision` defines the number of
 * decimal places for float values. This can be used
 * to compensate the integer rounding error of JS
 * It defaults to 10.
 *
 * @param {Number} value Input value to be scaled
 * @param {Number} inMin Lower limit of input range
 * @param {Number} inMax Upper limit of input range
 * @param {Number} outMin Lower limit of output range
 * @param {Number} outMax Upper limit of output range
 * @param {Number} precision [precision=10] Number of decimal places the result will be rounded to
 * @returns
 */
function scaleRange (value, inMin, inMax, outMin, outMax, precision = 10) {
  const result = (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
  return roundPrecisely(result, precision)
}

module.exports = scaleRange
