'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const patchObject = require('../lib/patch-object')

describe('patchObject', function () {
  it('exports the function patchObject', function () {
    expect(patchObject.name).to.equal('patchObject')
  })

  it('writes a value in `patch` over the value in `object`', function () {
    const patched1 = patchObject({ a: 1, b: 2 }, { a: 3 })
    JSON.stringify(patched1).should.equal(JSON.stringify({ a: 3, b: 2 }))

    const patched2 = patchObject({ a: 1, b: 2 }, { b: 3 })
    JSON.stringify(patched2).should.equal(JSON.stringify({ a: 1, b: 3 }))
  })

  it('recursively writes a value in `patch` over the value in `object`', function () {
    const patched1 = patchObject({ a: { c: 1, d: 3 }, b: 2 }, { a: { c: 2 } })
    JSON.stringify(patched1).should.equal(JSON.stringify({ a: { c: 2, d: 3 }, b: 2 }))

    const patched2 = patchObject({ a: { c: 1, d: 3 }, b: 2 }, { a: { d: 2 } })
    JSON.stringify(patched2).should.equal(JSON.stringify({ a: { c: 1, d: 2 }, b: 2 }))
  })

  it('adds new keys in patch that don\'t exist in original', function () {
    const patched1 = patchObject({ a: 1, b: 2 }, { c: 3 })
    JSON.stringify(patched1).should.equal(JSON.stringify({ a: 1, b: 2, c: 3 }))

    const patched2 = patchObject({ a: 1, b: 2 }, { c: 3 })
    JSON.stringify(patched2).should.equal(JSON.stringify({ a: 1, b: 2, c: 3 }))
  })

  it('recursively adds new keys in patch that don\'t exist in original', function () {
    const patched1 = patchObject({ a: { c: 1, d: 3 }, b: 2 }, { a: { e: 0 } })
    JSON.stringify(patched1).should.equal(JSON.stringify({ a: { c: 1, d: 3, e: 0 }, b: 2 }))
  })
})
