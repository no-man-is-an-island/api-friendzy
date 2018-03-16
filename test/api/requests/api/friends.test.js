process.env.NODE_ENV = 'test';

const Friend = require('../../../../app/models').Friend;

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../../../../app');

let expect = chai.expect;
chai.use(chaiHttp);

/*
* Test the GET /api/friends route
*/
describe('/GET api/friends', () => {
  it('it should GET all the friends data', done => {
    chai
      .request(app)
      .get('/api/friends')
      .end((_, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Friends can be filtered using the filter query parameter', done => {
    Friend.bulkCreate([
      {
        firstName: 'David',
        lastName: 'Williams',
        emailAddress: 'david@williams.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Daniel',
        lastName: 'Peters',
        emailAddress: 'daniel@peters.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }])
      .then(() => {
        chai
          .request(app)
          .get('/api/friends')
          .query({filter: 'Dav*'})
          .end((_, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.lengthOf(1);
          });
      }
      )
      .then(() => {
        chai
          .request(app)
          .get('/api/friends')
          .query({filter: 'Da*'})
          .end((_, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.lengthOf(2);
            done();
          });
      }
      );
  });
});

/*
 * Test the GET /api/friends/:id route
 */
describe('GET api/friends/:id', () => {
  it('should GET the friend record', done => {
    const friendToCreate = {
      firstName: 'Borris',
      lastName: 'Johnson',
      emailAddress: 'borris@johnson.com'
    };

    Friend.create(friendToCreate).then(record => {
      chai
        .request(app)
        .get(`/api/friends/${record.id}`)
        .end((_, res) => {
          expect(res).to.have.status(200);
          expect(res.body)
            .to.have.property('emailAddress')
            .equal(friendToCreate.emailAddress);
          expect(res.body)
            .to.have.property('firstName')
            .equal(friendToCreate.firstName);
          expect(res.body)
            .to.have.property('lastName')
            .equal(friendToCreate.lastName);
          done();
        });
    });
  });
});
