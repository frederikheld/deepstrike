'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const patchObject = require('../lib/patch-object')
const patchObjectInPlace = require('../lib/patch-object-in-place')

const ö = require('../index')

describe('module', function () {
  it('exports the function `patchObject`', function () {
    expect(ö.patchObject).to.equal(patchObject)
    expect(typeof ö.patchObject).equals('function')
  })

  it('exports the function `patchObjectInPlace`', function () {
    expect(ö.patchObjectInPlace).to.equal(patchObjectInPlace)
    expect(typeof ö.patchObjectInPlace).equals('function')
  })
})
