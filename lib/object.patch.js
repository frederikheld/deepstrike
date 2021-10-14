'use strict'

/**
 * This function takes two objects `original` and `patch`.
 *
 * It recursively writes all values in `patch` over those
 * in `original`.
 * Non-existing keys are being created.
 * Keys that don't exist in `patch` stay untouched in `original`.
 *
 * The function returns the patched object as a deep copy of
 * the `original`.
 *
 *
 * @param {Object} original
 * @param {Object} patch
 * @param {Boolean} patchInPlace
 */
const patchObject = function (original, patch, patchInPlace = false) {
  const patched = JSON.parse(JSON.stringify(original))
  for (const [key, value] of Object.entries(patch)) {
    if (patched[key] === undefined || typeof patched[key] !== 'object') {
      patched[key] = value
    } else if (typeof value === 'object') {
      patched[key] = patchObject(patched[key], value)
    }
  }
  return patched
}

module.exports = patchObject
