const mocha = require('mocha')
const chai = require('chai')
const request = require('request')

const srv = require('../server')
let server

const expect = chai.expect

describe('server', () => {

    before((done) => {
        server = srv.listen(7685, done)
    })

    it('rates should be correct', (done) => {
        request.get('http://localhost:7685/rate', (err, res, body) => {
            let rates = JSON.parse(body)
            expect(rates.fixed).to.equal(50)
            expect(rates.perKm).to.equal(10)
            done()
        })
    })

    after(() => {
        server.close()
    })

})