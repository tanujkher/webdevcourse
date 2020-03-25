const mocha = require('mocha')
const chai = require('chai')
const fareutils = require('../fareutils')

const expect = chai.expect

describe('fareUtils', () => {
    it('expect fare to be 50 for 0 km and 0 min', () => {
        let fare = fareutils.calcfare(0, 0)
        expect(fare).to.equal(50)
    })

    it('expect fare to be 100 for 10 km and 0 min', () => {
        let fare = fareutils.calcfare(10, 0)
        expect(fare).to.equal(100)
    })
})