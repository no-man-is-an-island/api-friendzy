const Friend = require('../../app/models').Friend;

// Before each test we empty the database.
// We have this in a global file so it applies to all tests.
// This may be the wrong decision long term, but it makes tests more concise for now
beforeEach(done => {
  Friend.destroy({
    where: {},
    truncate: true
  }).then(() => done());
});
