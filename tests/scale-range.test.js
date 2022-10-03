'use strict'

const chai = require('chai')
chai.should()

const scaleRange = require('../lib/scale-range')

describe.only('scaleRange', function () {
  it('exports the function scaleRange', function () {
    scaleRange.name.should.equal('scaleRange')
  })

  it('scales the given value from the given input range to the given output range', function () {
    const testData = [
      // scale up:
      { value: 1, in_min: 0, in_max: 10, out_min: 0, out_max: 100, expected: 10 },
      { value: 3, in_min: 0, in_max: 10, out_min: 0, out_max: 100, expected: 30 },
      { value: 5, in_min: 0, in_max: 10, out_min: 0, out_max: 100, expected: 50 },
      { value: 10, in_min: 0, in_max: 10, out_min: 0, out_max: 100, expected: 100 },
      // scale down:
      { value: 10, in_min: 0, in_max: 100, out_min: 0, out_max: 10, expected: 1 },
      { value: 30, in_min: 0, in_max: 100, out_min: 0, out_max: 10, expected: 3 },
      { value: 50, in_min: 0, in_max: 100, out_min: 0, out_max: 10, expected: 5 },
      { value: 100, in_min: 0, in_max: 100, out_min: 0, out_max: 10, expected: 10 },
      // scale down to 0..1 range:
      { value: 10, in_min: 0, in_max: 100, out_min: 0, out_max: 1, expected: 0.1 },
      { value: 15.375, in_min: 0, in_max: 100, out_min: 0, out_max: 1, expected: 0.15375 }
    ]

    for (const set of testData) {
      scaleRange(set.value, set.in_min, set.in_max, set.out_min, set.out_max).should.equal(set.expected)
    }
  })

  it('scales the value if the input range does not start with 0', function () {
    const testData = [
      // scale up (positive range):
      { value: 10.1, in_min: 10, in_max: 11, out_min: 0, out_max: 100, expected: 10 },
      { value: 3, in_min: 2, in_max: 6, out_min: 0, out_max: 100, expected: 25 },
      // scale up (from negative to positive):
      { value: -3, in_min: -8, in_max: 12, out_min: 0, out_max: 100, expected: 25 },
      { value: 5, in_min: -8, in_max: 12, out_min: 0, out_max: 100, expected: 65 },
      // scale up (negative range):
      { value: -6, in_min: -8, in_max: -4, out_min: 0, out_max: 100, expected: 50 },
      { value: -80, in_min: -100, in_max: -50, out_min: 0, out_max: 100, expected: 40 },
      { value: -80, in_min: -100, in_max: -0, out_min: 0, out_max: 100, expected: 20 }
    ]

    for (const set of testData) {
      scaleRange(set.value, set.in_min, set.in_max, set.out_min, set.out_max).should.equal(set.expected)
    }
  })

  it('scales the value if the output range does not start with 0', function () {
    const testData = [
      // scale up (positive range):
      { value: 1, in_min: 0, in_max: 10, out_min: 10, out_max: 20, expected: 11 },
      { value: 3, in_min: 0, in_max: 10, out_min: 13, out_max: 14, expected: 13.3 }
      // scale up (from negative to positive):
    //   { value: -3, in_min: 0, in_max: 10, out_min: 0, out_max: 100, expected: 25 },
    //   { value: 5, in_min: 0, in_max: 10, out_min: 0, out_max: 100, expected: 65 },
      // scale up (negative range):
    //   { value: -6, in_min: -8, in_max: -4, out_min: 0, out_max: 100, expected: 50 },
    //   { value: -80, in_min: -100, in_max: -50, out_min: 0, out_max: 100, expected: 40 },
    //   { value: -80, in_min: -100, in_max: -0, out_min: 0, out_max: 100, expected: 20 }
    ]

    for (const set of testData) {
      scaleRange(set.value, set.in_min, set.in_max, set.out_min, set.out_max).should.equal(set.expected)
    }
  })

  it('scales the value if it is outside of the given range', function () {
    const testData = [
      // scale up, below range:
      { value: -1, in_min: 0, in_max: 10, out_min: 0, out_max: 100, expected: -10 },
      { value: -3, in_min: 0, in_max: 10, out_min: 0, out_max: 100, expected: -30 },
      { value: -5, in_min: 0, in_max: 10, out_min: 0, out_max: 100, expected: -50 },
      { value: -10, in_min: 0, in_max: 10, out_min: 0, out_max: 100, expected: -100 }
    ]

    for (const set of testData) {
      scaleRange(set.value, set.in_min, set.in_max, set.out_min, set.out_max).should.equal(set.expected)
    }
  })

  it('returns the Number with given `precision`', function () {
    const testData = [
      // scale up:
      { value: 1.1, in_min: 0, in_max: 10, out_min: 0, out_max: 100, precision: 10, expected: 11 },
      { value: 3.5, in_min: 0, in_max: 10, out_min: 0, out_max: 100, precision: 10, expected: 35 },
      { value: 3.5, in_min: 0, in_max: 10, out_min: 0, out_max: 95, precision: 10, expected: 33.25 },
      { value: 3.5, in_min: 0, in_max: 10, out_min: 0, out_max: 99, precision: 10, expected: 34.65 },
      { value: 3.5, in_min: 0, in_max: 10, out_min: 0, out_max: 99.999999999, precision: 10, expected: 34.9999999997 },
      { value: 3.5, in_min: 0, in_max: 10, out_min: 0, out_max: 99.999, precision: 10, expected: 34.99965 },
      { value: 3.5, in_min: 0, in_max: 10, out_min: 0, out_max: 99.999, precision: 4, expected: 34.9996 }
    ]

    for (const set of testData) {
      scaleRange(set.value, set.in_min, set.in_max, set.out_min, set.out_max, set.precision).should.equal(set.expected)
    }
  })
})
