'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const buildNestedObject = require('../lib/build-nested-object')
const patchObject = require('../lib/patch-object')
const patchObjectInPlace = require('../lib/patch-object-in-place')
const roundPrecisely = require('../lib/round-precisely')
const median = require('../lib/median')
const generateCode = require('../lib/generate-code')
const range = require('../lib/range')
const kebabCaseToCamelCase = require('../lib/kebab-case-to-camel-case')
const kebabCaseToPascalCase = require('../lib/kebab-case-to-pascal-case')

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

  it('exports the function `roundPrecisely`', function () {
    expect(ö.roundPrecisely).to.equal(roundPrecisely)
    expect(typeof ö.roundPrecisely).equals('function')
  })

  it('exports the function `median`', function () {
    expect(ö.median).to.equal(median)
    expect(typeof ö.median).equals('function')
  })

  it('exports the function `generateCode`', function () {
    expect(ö.generateCode).to.equal(generateCode)
    expect(typeof ö.generateCode).equals('function')
  })

  it('exports the function `range`', function () {
    expect(ö.range).to.equal(range)
    expect(typeof ö.range).equals('function')
  })

  it('exports the function `kebabCaseToCamelCase`', function () {
    expect(ö.kebabCaseToCamelCase).to.equal(kebabCaseToCamelCase)
    expect(typeof ö.kebabCaseToCamelCase).equals('function')
  })

  it('exports the function `kebabCaseToPascalCase`', function () {
    expect(ö.kebabCaseToPascalCase).to.equal(kebabCaseToPascalCase)
    expect(typeof ö.kebabCaseToPascalCase).equals('function')
  })
})
