require('dotenv').config()
process.env.NODE_ENV = 'test'

//const { Job, sequelize } = require('../models')

const codes = require('http-status-codes')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

chai.use(chaiHttp)
describe('Job', () => {
  before(done => server.on('app-is-ready', () => {
    console.log('As App is ready, start with testing.')
    done()
  }))

  describe('/GET job', () => {
    it('it should get ALL jobs', done => {
      chai.request(server)
        .get('/job')
        .end((err, res) => {
          res.should.have.status(codes.OK)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(0)
          done()
        })
    })
  })

  describe('/POST job', () => {
    it('it should not POST a job without title field', done => {
      let job = {
        //title : 'A new Job'
      }

      chai.request(server)
        .post('/job')
        .send(job)
        .end((err, res) => {
          res.should.have.status(codes.BAD_REQUEST)
          res.body.should.be.a('object')
          done()
        })
    })
  })
})