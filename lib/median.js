/**
 * Returns the median of a given array of numbers.
 *
 * Learn how the median is being calculated here: https://en.wikipedia.org/wiki/Median
 *
 * Note: this function works with any input array but it is specifically designed
 *       to work with numbers. So use at own risk with different data types!
 */
function median (arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) return undefined

  arrayOfNumbers.sort((a, b) => a - b)

  if (arrayOfNumbers.length % 2 === 0) { // even length
    const lowerMedian = arrayOfNumbers[Math.floor(arrayOfNumbers.length / 2) - 1]
    const higherMedian = arrayOfNumbers[Math.floor(arrayOfNumbers.length / 2)]

    return (lowerMedian + higherMedian) / 2
  } else { // odd length
    return arrayOfNumbers[Math.floor(arrayOfNumbers.length / 2)]
  }
}

module.exports = median
