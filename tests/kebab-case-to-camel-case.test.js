'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const kebabCaseToCamelCase = require('../lib/kebab-case-to-camel-case')

describe('kebabCaseToCamelCase', function () {
  it('exports the function kebabCaseToCamelCase', function () {
    expect(kebabCaseToCamelCase.name).to.equal('kebabCaseToCamelCase')
  })

  it('turns the given string in kebab-case into a return value in camelCase', function () {
    const samples = [
      { in: 'kebab-case', out: 'kebabCase' },
      { in: 'something-else', out: 'somethingElse' },
      { in: 'kebab-case-multi', out: 'kebabCaseMulti' },
      { in: 'some-more-multi', out: 'someMoreMulti' },
      { in: 'even-more-concatenated-words', out: 'evenMoreConcatenatedWords' },
      { in: 'kebab', out: 'kebab' }
    ]

    samples.forEach((item) => {
      expect(kebabCaseToCamelCase(item.in)).to.equal(item.out)
    })
  })
})
