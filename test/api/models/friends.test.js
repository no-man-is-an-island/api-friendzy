let expect = require('chai').expect;
const Friend = require('../../../app/models').Friend;

describe('MODEL Friend', () => {
  it('should create a Friend record', done => {
    Friend.create({
      firstName: 'John',
      lastName: 'Doe',
      emailAddress: 'john@doe.com',
      createdAt: new Date(),
      updatedAt: new Date()
    })
      .then(friendData => {
        Friend.all()
          .then(data => {
            expect(data[data.length - 1].dataValues.id).to.eq(
              friendData.dataValues.id
            );
            done();
          })
          .catch(error => {
            throw new Error(error);
          });
      })
      .catch(error => {
        throw new Error(error);
      });
  });

  it('Can filter down friends on any field using filter method', done => {
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
        emailAddress: 'daniel@pe_ters.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }])
      .then(friendData => {
        Friend.filter('wontmatch')
          .then(data => expect(data).to.have.lengthOf(0));
        Friend.filter(undefined).then(data => expect(data).to.have.lengthOf(2));
        Friend.filter('').then(data => expect(data).to.have.lengthOf(0));
        Friend.filter('D*').then(data => expect(data).to.have.lengthOf(2));
        Friend.filter('Davi_').then(data => expect(data).to.have.lengthOf(0));
        Friend.filter('da*').then(data => expect(data).to.have.lengthOf(2));
        Friend.filter('*a*').then(data => expect(data).to.have.lengthOf(2));
        Friend.filter('*.com').then(data => expect(data).to.have.lengthOf(2));
        Friend.filter('*_*').then(data => expect(data).to.have.lengthOf(1));
        Friend.filter('Williams').then(data => {
          expect(data).to.have.lengthOf(1);
          expect(data[0]).to.have.property('firstName').equal('David');
        });
        done();
      })
      .catch(error => {
        throw new Error(error);
      });
  });
});
