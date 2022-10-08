/**
 * This function generates a string of the given length
 * that is a random combination of the given characters.
 *
 * Be aware that the generated codes are random but not unique!
 * If you need unique codes (e.g. for session codes), please implement
 * your own mechanism to avoid duplicates!
 *
 * @param {Number} length Any valid positive number. Defaults to 5.
 * @param {String} characters A string of characters that will be used to generate the code. Defaults to [A-Z0-9].
 * @returns {String} Generated code
 */
function generateCode (length = 5, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') {
  if (length <= 0) {
    throw new RangeError('`length` can\'t be 0 or negative!')
  }

  if (typeof characters !== 'string') {
    throw new TypeError('`characters` has to be typeof string!')
  }

  return Array(length).fill().map(() => { return characters.charAt(Math.floor(Math.random() * characters.length)) }).join('')
}

module.exports = generateCode
