'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const patchObject = require('../lib/object.patch')
const ö = require('../index')

describe('module', function () {
  it('exports the function `patchObject`', function () {
    expect(ö.patchObject).to.equal(patchObject)
    expect(typeof ö.patchObject).equals('function')
  })
})
