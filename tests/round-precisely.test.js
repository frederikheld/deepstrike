'use strict'

const chai = require('chai')
chai.should()

const roundPrecisely = require('../lib/round-precisely')

describe('roundPrecisely', function () {
  context('the module', function () {
    it('exports the function roundPrecisely', function () {
      roundPrecisely.name.should.equal('roundPrecisely')
    })
  })

  context('the parameter `precision`', function () {
    it('defaults to 10', function () {
      const testData = [
        { value: 10, expected: 10 },
        { value: 10.941352, expected: 10.941352 },
        { value: 10.9413528737, expected: 10.9413528737 },
        { value: 10.94135287365827, expected: 10.9413528737 },
        { value: 10.94135287364827, expected: 10.9413528736 },
        { value: 10.9413528736, expected: 10.9413528736 },
        { value: 10.9413528736789, expected: 10.9413528737 }
      ]

      for (const set of testData) {
        const result = roundPrecisely(set.value)
        result.should.be.a('Number').that.equals(set.expected)
      }
    })

    it('throws a TypeError if `precision` has decimal places', function () {
      const testData = [
        { value: 10, precision: 1.1 },
        { value: 10, precision: 10.2 },
        { value: 10, precision: 11.1231231 }
      ]

      for (const set of testData) {
        (() => {
          roundPrecisely(set.value, set.precision)
        }).should.throw(TypeError, 'Precision has to be of type Integer')
      }
    })

    it('throws a RangeError if `precision` is negative', function () {
      const testData = [
        { value: 10, precision: -1 },
        { value: 10, precision: -1 },
        { value: 10, precision: -11 }
      ]

      for (const set of testData) {
        (() => {
          roundPrecisely(set.value, set.precision)
        }).should.throw(RangeError, 'Precision cannot be negative')
      }
    })
  })

  context('the returned result', function () {
    it('returns a Number that is rounded to the decimal place given in `precision`', function () {
      const testData = [
        { value: 10, precision: 10, expected: 10 },
        { value: 10.941352873658273, precision: 5, expected: 10.94135 },
        { value: 10.941357873658273, precision: 5, expected: 10.94136 },
        { value: 10.941352873658273, precision: 8, expected: 10.94135287 },
        { value: 10.941352873658273, precision: 9, expected: 10.941352874 },
        { value: 10.941352873658273, precision: 1, expected: 10.9 },
        { value: 10.951352873658273, precision: 1, expected: 11 },
        { value: 10.941352873658273, precision: 0, expected: 11 }
      ]

      for (const set of testData) {
        const result = roundPrecisely(set.value, set.precision)
        result.should.be.a('Number').that.equals(set.expected)
      }
    })

    it('throws a RangeError if the result is lower than Number.MIN_SAFE_INTEGER or greather than Number.MAX_SAFE_INTEGER', function () {
      // max positive result
      (() => {
        roundPrecisely(Number.MAX_SAFE_INTEGER, 0)
      }).should.not.throw()

      ;(() => {
        roundPrecisely(Number.MAX_SAFE_INTEGER / 10, 1)
      }).should.not.throw()

      ;(() => {
        roundPrecisely(Number.MAX_SAFE_INTEGER / 100, 2)
      }).should.not.throw()

      // value +1:
      ;(() => {
        roundPrecisely(Number.MAX_SAFE_INTEGER + 1, 0)
      }).should.throw(RangeError, 'Result precision is out of safe range')

      ;(() => {
        roundPrecisely(Number.MAX_SAFE_INTEGER / 10 + 1, 1)
      }).should.throw(RangeError, 'Result precision is out of safe range')

      ;(() => {
        roundPrecisely(Number.MAX_SAFE_INTEGER / 100 + 1, 2)
      }).should.throw(RangeError, 'Result precision is out of safe range')

      // value -1:
      ;(() => {
        roundPrecisely(Number.MIN_SAFE_INTEGER - 1, 0)
      }).should.throw(RangeError, 'Result precision is out of safe range')

      ;(() => {
        roundPrecisely(Number.MIN_SAFE_INTEGER / 10 - 1, 1)
      }).should.throw(RangeError, 'Result precision is out of safe range')

      ;(() => {
        roundPrecisely(Number.MIN_SAFE_INTEGER / 100 - 1, 2)
      }).should.throw(RangeError, 'Result precision is out of safe range')

      // precision +1:
      ;(() => {
        roundPrecisely(Number.MAX_SAFE_INTEGER, 1)
      }).should.throw(RangeError, 'Result precision is out of safe range')

      ;(() => {
        roundPrecisely(Number.MAX_SAFE_INTEGER / 10, 2)
      }).should.throw(RangeError, 'Result precision is out of safe range')

      ;(() => {
        roundPrecisely(Number.MAX_SAFE_INTEGER / 100, 3)
      }).should.throw(RangeError, 'Result precision is out of safe range')
    })
  })
})
