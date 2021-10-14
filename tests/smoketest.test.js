'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

describe('test setup', function () {
  it('should run tests in should style', function () {
    'hello world'.should.equal('hello world')
  })

  it('is expected to run tests in expect style', function () {
    expect('hello world').to.equal('hello world')
  })
})
