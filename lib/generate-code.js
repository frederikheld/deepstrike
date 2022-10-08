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
