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
    
    it('expect fare to be 56 for 2 km and 18 min', () => {
        let fare = fareutils.calcfare(2, 18)
        expect(fare).to.equal(56)
    })

    it('expect fare to be 58 for 2 km and 19 min', () => {
        let fare = fareutils.calcfare(2, 19)
        expect(fare).to.equal(58)
    })
})