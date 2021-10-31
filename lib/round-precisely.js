'use strict'

/**
 * Returns the given `value` rounded with the given `precision`.
 *
 * `precision` defaults to 10.
 *
 * Throws RangeError if resulting precision is not safe.
 *
 * @param {Number} value Number to round
 * @param {Number} precision [precision=10] Number of decimal places to round to
 * @returns {Number} Rounded Number
 */
function roundPrecisely (value, precision = 10) {
  if (!Number.isSafeInteger(precision)) {
    throw new TypeError('Precision has to be of type Integer')
  }

  if (precision < 0) {
    throw new RangeError('Precision cannot be negative')
  }

  const power = 10 ** precision
  const result = (Math.round(value * power)) / power

  if (!Number.isSafeInteger(result * power)) {
    throw new RangeError('Result precision is out of safe range')
  }

  return result
}

module.exports = roundPrecisely
