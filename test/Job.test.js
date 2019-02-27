require('dotenv').config();
process.env.NODE_ENV = "test";

const {Job, Staff} = require('../models');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);
describe('Job', () => {
    beforeEach(done => {
        Job.destroy({
            where: {},
            truncate: true
        })
        .catch(err => console.error(err))
        .finally(() => done());
    });

    describe('/GET jobs', () => {
        it('it should get ALL jobs', done => {
            chai.request(server)
                .get('/job')
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                });
            done();
        });
    });
})