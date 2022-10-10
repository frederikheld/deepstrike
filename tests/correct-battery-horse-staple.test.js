'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const sinon = require('sinon')

const correctBatteryHorseStaple = require('../lib/correct-battery-horse-staple')

describe('correctBatteryHorseStaple', function () {
  it('exports the function `correctBatteryHorseStaple`', function () {
    expect(correctBatteryHorseStaple.name).to.equal('correctBatteryHorseStaple')
  })

  it.only('returns a string that is a random concatenation of `n` words from the given `dictionary`', function () {
    // const sample = []
    // const checkedItems = []

    const range = (new Array(32)).fill() // 2^5 = 32

    range.forEach((item, index) => {
      sinon.stub(global.Math, 'random')
        .onCall(0).returns((index * 0.01 + 0.01) % 1.0)
        .onCall(1).returns((index * 0.01 + 0.02) % 1.0)
        .onCall(2).returns((index * 0.01 + 0.03) % 1.0)

      const result = correctBatteryHorseStaple(2, ['foo', 'bar', 'baz', 'blip', 'blup'])

      expect(
        (result.indexOf('foo') >= 0 && result.indexOf('bar') >= 0) ||
        (result.indexOf('bar') >= 0 && result.indexOf('baz') >= 0) ||
        (result.indexOf('baz') >= 0 && result.indexOf('foo') >= 0)
      ).to.equal(true)

      //   sample.push(correctBatteryHorseStaple(2, ['foo', 'bar', 'baz', 'blip', 'blup']))

      global.Math.random.restore()

      // CONTINUE: getting "TypeError: Attempted to wrap random which is already wrapped"
    })
  })
})
