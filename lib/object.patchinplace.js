'use strict'

/**
 * This function takes two objects `original` and `patch`.
 *
 * It recursively writes all values in `patch` over those
 * in `original`.
 * Non-existing keys are being created.
 * Keys that don't exist in `patch` stay untouched in `original`.
 *
 * The function patches `original` in place! It has no return value.
 *
 * @param {Object} original
 * @param {Object} patch
 */
const patchObjectInPlace = function (original, patch) {
  for (const [key, value] of Object.entries(patch)) {
    if (original[key] === undefined || typeof original[key] !== 'object') {
      original[key] = value
    } else if (typeof value === 'object') {
      patchObjectInPlace(original[key], value)
    }
  }
}

module.exports = patchObjectInPlace
