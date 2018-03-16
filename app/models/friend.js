module.exports = (sequelize, DataTypes) => {
  let Friend = sequelize.define('Friend', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: DataTypes.STRING
  });

  // Matching is currently case-sensitive.
  Friend.filter = (rawFilterString) => {
    if (rawFilterString === undefined) {
      return Friend.all();
    } else {
      // We need to escape/convert the */_/% characters so as
      // to get the right result from Postgres's LIKE
      // pattern matching
      const filterString = rawFilterString
        .replace(/%/g, '\\%')
        .replace(/\*/g, '%')
        .replace(/_/g, '\\_');

      return Friend.findAll({
        where: {
          $or: [
            {firstName: {$like: filterString}},
            {lastName: {$like: filterString}},
            {emailAddress: {$like: filterString}}
          ]
        }
      });
    }
  };

  return Friend;
};
