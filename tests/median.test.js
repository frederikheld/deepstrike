'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const median = require('../lib/median')

describe('median', function () {
  it('exports the function median', function () {
    expect(median.name).to.equal('median')
  })

  it('returns the middle item after sorting for an odd number of numbers in the array', function () {
    const data = [
      // default cases:
      { input: [3, 12, 23, 1, 3], expected: 3 },
      { input: [4, 2, 3, 1, 2], expected: 2 },
      { input: [4, 2, 3], expected: 3 },
      { input: [12, 1231, 0, 12, 33, 12, 2], expected: 12 },

      // edge case: 1 array element:
      { input: [12], expected: 12 },
      { input: [1], expected: 1 }
    ]

    data.forEach(sample => {
      expect(median(sample.input)).to.equal(sample.expected)
    })
  })

  it('returns the arithmetic middle of the both middle items after sorting for an even number of numbers in the array', function () {
    const data = [
      // default cases:
      { input: [3, 12, 23, 1, 3, 3], expected: 3 },
      { input: [4, 2, 3, 1, 2, 7], expected: 2.5 },
      { input: [4, 2, 3, 1], expected: 2.5 },
      { input: [12, 1231, 0, 12, 33, 12, 2, 1], expected: 12 },

      // edge case: 2 array elements:
      { input: [12, 3], expected: 7.5 },
      { input: [1, 0], expected: 0.5 },
      { input: [1, 3], expected: 2 },
      { input: [0, 0], expected: 0 }
    ]

    data.forEach(sample => {
      expect(median(sample.input)).to.equal(sample.expected)
    })
  })

  it('returns undefined for an empty array', function () {
    expect(median([])).to.eql(undefined)
  })
})
