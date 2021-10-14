'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const buildNestedObject = require('../lib/build-nested-object')
const patchObject = require('../lib/patch-object')
const patchObjectInPlace = require('../lib/patch-object-in-place')

const ö = require('../index')

describe('module', function () {
  it('exports the function `buildNestedObject`', function () {
    expect(ö.buildNestedObject).to.equal(buildNestedObject)
    expect(typeof ö.buildNestedObject).equals('function')
  })

  it('exports the function `patchObject`', function () {
    expect(ö.patchObject).to.equal(patchObject)
    expect(typeof ö.patchObject).equals('function')
  })

  it('exports the function `patchObjectInPlace`', function () {
    expect(ö.patchObjectInPlace).to.equal(patchObjectInPlace)
    expect(typeof ö.patchObjectInPlace).equals('function')
  })
})
