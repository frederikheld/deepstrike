'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const getValueFromNestedObject = require('../lib/get-value-from-nested-object')

describe('getValueFromNestedObject', function () {
  it('exports the function getValueFromNestedObject', function () {
    expect(getValueFromNestedObject.name).to.equal('getValueFromNestedObject')
  })

  it('returns the value for a given key path from a nested object', function () {
    const samples = [
      {
        obj: { foo: { bar: 'value' } },
        path: 'foo.bar',
        expectedResult: 'value'
      },
      {
        obj: { foo: { bar: { baz: 'value' } } },
        path: 'foo.bar.baz',
        expectedResult: 'value'
      },
      {
        obj: { foo: { bar: { baz: 'value', this: 'that' } } },
        path: 'foo.bar.this',
        expectedResult: 'that'
      },
      {
        obj: { foo: { bar: { baz: 'value' }, this: 'that' } },
        path: 'foo.this',
        expectedResult: 'that'
      }
    ]

    samples.forEach((sample) => {
      expect(getValueFromNestedObject(sample.obj, sample.path)).to.equal(sample.expectedResult)
    })
  })

  it('returns `undefined` if the key does not exist', function () {
    const samples = [
      // final key does not exist:
      {
        obj: { foo: { bar: 'value' } },
        path: 'foo.bar.baz',
        expectedResult: undefined
      },
      {
        obj: { foo: { bar: 'value', this: { that: 'something' } } },
        path: 'foo.this.baz',
        expectedResult: undefined
      },
      // nesting layer does not exist:
      {
        obj: { foo: { bar: 'value' } },
        path: 'foo.this.baz',
        expectedResult: undefined
      },
      {
        obj: { foo: { bar: 'value' } },
        path: 'this.that.baz',
        expectedResult: undefined
      }
    ]

    samples.forEach((sample) => {
      expect(getValueFromNestedObject(sample.obj, sample.path)).to.equal(sample.expectedResult)
    })
  })

  it('returns `undefined` if the value is actually undefined', function () {
    const samples = [
      {
        obj: { foo: { bar: undefined } },
        path: 'foo.bar',
        expectedResult: undefined
      },
      {
        obj: { foo: { bar: { baz: undefined } } },
        path: 'foo.bar.baz',
        expectedResult: undefined
      },
      {
        obj: { foo: { bar: { baz: 'value' }, this: undefined } },
        path: 'foo.this',
        expectedResult: undefined
      }
    ]

    samples.forEach((sample) => {
      expect(getValueFromNestedObject(sample.obj, sample.path)).to.equal(sample.expectedResult)
    })
  })

  it('can return primitive data types', function () {
    const samples = [
      // number:
      {
        obj: { foo: { bar: 1 } },
        path: 'foo.bar',
        expectedResult: 1
      },
      // boolean:
      {
        obj: { foo: { bar: false } },
        path: 'foo.bar',
        expectedResult: false
      },
      // string:
      {
        obj: { foo: { bar: 'string' } },
        path: 'foo.bar',
        expectedResult: 'string'
      }
    ]

    samples.forEach((sample) => {
      expect(getValueFromNestedObject(sample.obj, sample.path)).to.equal(sample.expectedResult)
    })
  })

  it('can return object data types', function () {
    const samples = [
      // object:
      {
        obj: { foo: { bar: { this: 'that' } } },
        path: 'foo.bar',
        expectedResult: { this: 'that' }
      },
      // nested object:
      {
        obj: { foo: { bar: { this: { that: 'something' } } } },
        path: 'foo.bar',
        expectedResult: { this: { that: 'something' } }
      },
      // array
      {
        obj: { foo: { bar: ['foo', 'bar', 'baz'] } },
        path: 'foo.bar',
        expectedResult: ['foo', 'bar', 'baz']
      }
    ]

    samples.forEach((sample) => {
      expect(getValueFromNestedObject(sample.obj, sample.path)).to.eql(sample.expectedResult)
      // NOTE: `eql()` is the deep equality comparison for objects
    })
  })
})
