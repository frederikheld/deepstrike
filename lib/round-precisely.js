'use strict'

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
