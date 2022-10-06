/**
 * Returns the median of a given set of numbers.
 *
 * Learn how the median is being calculated here: https://en.wikipedia.org/wiki/Median
 *
 * Note: Although this function might work with any input data, it is specifically designed and
 *       to work with a set of numbers. So use at your own risk with different data types!
 *
 * @param {Array of Numbers} set Array to find the median of
 * @returns {Number} Median
 */
function median (set) {
  if (set.length === 0) return undefined

  set.sort((a, b) => a - b)

  if (set.length % 2 === 0) { // even length
    const lowerMedian = set[Math.floor(set.length / 2) - 1]
    const higherMedian = set[Math.floor(set.length / 2)]

    return (lowerMedian + higherMedian) / 2
  } else { // odd length
    return set[Math.floor(set.length / 2)]
  }
}

module.exports = median
