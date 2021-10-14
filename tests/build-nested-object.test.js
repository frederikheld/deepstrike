'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const buildNestedObject = require('../lib/build-nested-object')

describe('buildNestedObject', function () {
  it('exports the function buildNestedObject', function () {
    expect(buildNestedObject.name).to.equal('buildNestedObject')
  })

  context('parameter `keyScheme` is a String', function () {
    it('returns an object with the given key and value', function () {
      const nestedObject = buildNestedObject('key', 'value')
      JSON.stringify(nestedObject).should.equal(JSON.stringify({ key: 'value' }))
    })

    it('returns an object that has the value 2 levels deep according to the key scheme', function () {
      const nestedObject = buildNestedObject('foo.bar', 'value')
      JSON.stringify(nestedObject).should.equal(JSON.stringify({ foo: { bar: 'value' } }))
    })

    it('returns an object that has the value 3 levels deep according to the key scheme', function () {
      const nestedObject = buildNestedObject('foo.bar.baz', 'value')
      JSON.stringify(nestedObject).should.equal(JSON.stringify({ foo: { bar: { baz: 'value' } } }))
    })
  })

  context('parameter `keyScheme` is an Array', function () {
    it('returns an object with the given key and value', function () {
      const nestedObject = buildNestedObject(['key'], 'value')
      JSON.stringify(nestedObject).should.equal(JSON.stringify({ key: 'value' }))
    })

    it('returns an object that has the value 2 levels deep according to the key scheme', function () {
      const nestedObject = buildNestedObject(['foo', 'bar'], 'value')
      JSON.stringify(nestedObject).should.equal(JSON.stringify({ foo: { bar: 'value' } }))
    })

    it('returns an object that has the value 3 levels deep according to the key scheme', function () {
      const nestedObject = buildNestedObject(['foo', 'bar', 'baz'], 'value')
      JSON.stringify(nestedObject).should.equal(JSON.stringify({ foo: { bar: { baz: 'value' } } }))
    })
  })
})
