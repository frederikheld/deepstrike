'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const range = require('../lib/range')

describe('range', function () {
  it('exports the function `range`', function () {
    expect(range.name).to.equal('range')
  })

  it('returns an array with the given `length`', function () {
    const r = (new Array(100)).fill()

    r.forEach((item, index) => {
      expect(range(index)).to.have.length(index)
    })
  })

  it('the array can be iterated', function () {
    // Explanation of this test:
    // `new Array(5)` will create an array with 5 empty elements.
    // They are not undefined, but emtpy, whatever that means.
    // Arrays with empty elements can't be iterated, so the array
    // has to be filled with `(new Array(5)).fill()`.
    // This is what we test here.
    // I couldn't figure out how to test an array for empty elements,
    // so we are going to check if the loop runs instead.

    const r = range(10) // this line is meta ;-P
    // const r = (new Array(10)).fill()
    r.forEach((item, index) => {
      const samples = []

      range(index).forEach(() => { // this is where the function is actually being tested
        samples.push('yay!')
      })

      expect(samples.length).to.equal(index)
    })
  })
})
