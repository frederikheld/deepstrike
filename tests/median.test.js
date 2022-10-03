'use strict'

const chai = require('chai')
chai.should()
const expect = chai.expect

const median = require('../lib/median')

describe('median', function () {
  it('exports the function median', function () {
    expect(median.name).to.equal('median')
  })
})
