'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const kebabCaseToPascalCase = require('../lib/kebab-case-to-pascal-case')

describe('kebabCaseToPascalCase', function () {
  it('exports the function kebabCaseToPascalCase', function () {
    expect(kebabCaseToPascalCase.name).to.equal('kebabCaseToPascalCase')
  })

  it('turns the given string parameter in kebab-case into a return value in PascalCase', function () {
    const samples = [
      { in: 'kebab-case', out: 'KebabCase' },
      { in: 'something-else', out: 'SomethingElse' },
      { in: 'kebab-case-multi', out: 'KebabCaseMulti' },
      { in: 'some-more-multi', out: 'SomeMoreMulti' },
      { in: 'even-more-concatenated-words', out: 'EvenMoreConcatenatedWords' },
      { in: 'kebab', out: 'Kebab' },
      { in: '', out: '' }
    ]

    samples.forEach((item) => {
      expect(kebabCaseToPascalCase(item.in)).to.equal(item.out)
    })
  })
})
