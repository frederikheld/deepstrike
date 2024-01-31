'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const kebabCaseToCamelCase = require('../lib/kebab-case-to-camel-case')

describe('kebabCaseToCamelCase', function () {
  it('exports the function kebabCaseToCamelCase', function () {
    expect(kebabCaseToCamelCase.name).to.equal('kebabCaseToCamelCase')
  })
})
