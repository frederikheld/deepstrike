'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const patchObjectInPlace = require('../lib/patch-object-in-place')

describe('patchObjectInPlace', function () {
  it('exports the function patchInPlace', function () {
    expect(patchObjectInPlace.name).to.equal('patchObjectInPlace')
  })

  it('writes a value in `patch` over the value in `object`', function () {
    const original1 = { a: 1, b: 2 }
    patchObjectInPlace(original1, { a: 3 })
    JSON.stringify(original1).should.equal(JSON.stringify({ a: 3, b: 2 }))

    const original2 = { a: 1, b: 2 }
    patchObjectInPlace(original2, { b: 3 })
    JSON.stringify(original2).should.equal(JSON.stringify({ a: 1, b: 3 }))
  })

  it('recursively writes a value in `patch` over the value in `object`', function () {
    const original1 = { a: { c: 1, d: 3 }, b: 2 }
    patchObjectInPlace(original1, { a: { c: 2 } })
    JSON.stringify(original1).should.equal(JSON.stringify({ a: { c: 2, d: 3 }, b: 2 }))

    const original2 = { a: { c: 1, d: 3 }, b: 2 }
    patchObjectInPlace(original2, { a: { d: 2 } })
    JSON.stringify(original2).should.equal(JSON.stringify({ a: { c: 1, d: 2 }, b: 2 }))
  })

  it('adds new keys in patch that don\'t exist in original', function () {
    const original1 = { a: 1, b: 2 }
    patchObjectInPlace(original1, { c: 3 })
    JSON.stringify(original1).should.equal(JSON.stringify({ a: 1, b: 2, c: 3 }))

    const original2 = { a: 1, b: 2 }
    patchObjectInPlace(original2, { c: 3 })
    JSON.stringify(original2).should.equal(JSON.stringify({ a: 1, b: 2, c: 3 }))
  })

  it('recursively adds new keys in patch that don\'t exist in original', function () {
    const original1 = { a: { c: 1, d: 3 }, b: 2 }
    patchObjectInPlace(original1, { a: { e: 0 } })
    JSON.stringify(original1).should.equal(JSON.stringify({ a: { c: 1, d: 3, e: 0 }, b: 2 }))
  })
})
