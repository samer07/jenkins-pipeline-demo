const { expect } = require('chai');
const request = require('supertest');
const app = require('../../app'); // No need for .js extension


describe('Basic Test', () => {
  it('should return 200 for the /api/home route', (done) => {
    request(app)
      .get('/api/home')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        done();
      });
  });
});
