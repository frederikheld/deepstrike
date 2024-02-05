'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const camelCaseToKebabCase = require('../lib/camel-case-to-kebab-case')

describe('camelCaseToKebabCase', function () {
  it('exports the function camelCaseToKebabCase', function () {
    expect(camelCaseToKebabCase.name).to.equal('camelCaseToKebabCase')
  })

  it('turns the given string parameter in camelCase into a return value in kebab-case', function () {
    const samples = [
      { in: 'camelCase', out: 'camel-case' },
      { in: 'somethingElse', out: 'something-else' },
      { in: 'camelCaseMulti', out: 'camel-case-multi' },
      { in: 'someMoreMulti', out: 'some-more-multi' },
      { in: 'evenMoreConcatenatedWords', out: 'even-more-concatenated-words' },
      { in: 'camel', out: 'camel' },
      { in: 'c', out: 'c' },
      { in: 'cAMeL', out: 'c-a-me-l' },
      { in: '', out: '' }
    ]

    samples.forEach((item) => {
      expect(camelCaseToKebabCase(item.in)).to.equal(item.out)
    })
  })
})
