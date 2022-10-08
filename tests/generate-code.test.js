'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const sinon = require('sinon')

const generateCode = require('../lib/generate-code')

describe('generateCode', function () {
  it('exports the function generateCode', function () {
    expect(generateCode.name).to.equal('generateCode')
  })

  it('each generated code is a random combination of characters', function () {
    const sample = []
    const checkedItems = []

    const range = (new Array(99)).fill()

    // create sample with different seeds each:
    range.forEach((item, index) => {
      sinon.stub(global.Math, 'random')
        .onCall(0).returns((index * 0.01 + 0.01) % 1.0)
        .onCall(1).returns((index * 0.01 + 0.02) % 1.0)
        .onCall(2).returns((index * 0.01 + 0.03) % 1.0)
        .onCall(3).returns((index * 0.01 + 0.04) % 1.0)
        .onCall(4).returns((index * 0.01 + 0.05) % 1.0)

      sample.push(generateCode())

      global.Math.random.restore()
    })

    // check sample for duplicates:
    sample.forEach((item) => {
      expect(checkedItems.indexOf(item)).equal(-1)
      checkedItems.push(item)
    })
  })

  describe('first parameter `length`', function () {
    it('defaults to 5', function () {
      expect(generateCode()).to.be.length(5)
    })

    it('can be set to any positive number', function () {
      expect(generateCode(1)).to.be.length(1)
      expect(generateCode(4)).to.be.length(4)
      expect(generateCode(41233)).to.be.length(41233)
    })

    it('throws a `RangeError` if paramenter `length` is 0 or negative', function () {
      const expectedError = RangeError
      const expectedMessage = '`length` can\'t be 0 or negative!'
      expect(() => { generateCode(0) }).to.throw(expectedError, expectedMessage)

      expect(() => { generateCode(-1) }).to.throw(expectedError, expectedMessage)
      expect(() => { generateCode(-2) }).to.throw(expectedError, expectedMessage)
      expect(() => { generateCode(-200) }).to.throw(expectedError, expectedMessage)
    })
  })

  describe('first parameter `characters`', function () {
    it('defaults to upper-case characters A-Z and numbers', function () {
      const range = (new Array(10)).fill()
      range.forEach(() => {
        expect(generateCode()).to.match(/[A-Z0-9]{5}/)
      })
    })

    it('can be set to any string of characters', function () {
      const range = (new Array(10)).fill()

      const inputCharacters1 = 'ABC'
      range.forEach(() => {
        expect(generateCode(5, inputCharacters1)).to.match(/[A-C]{5}/)
      })

      const inputCharacters2 = 'A'
      range.forEach(() => {
        expect(generateCode(5, inputCharacters2)).to.match(/[A]{5}/)
      })

      const inputCharacters3 = 'ABCabc123'
      range.forEach(() => {
        expect(generateCode(5, inputCharacters3)).to.match(/[A-Ca-c1-3]{5}/)
      })
    })

    it('throws a `TypeError` if it is not a string type', function () {
      expect(() => { generateCode(5, 1) }).to.throw(TypeError, '`characters` has to be typeof string!')
    })
  })
})
