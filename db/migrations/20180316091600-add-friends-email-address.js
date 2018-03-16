module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Friends',
      'emailAddress',
      {
        type: Sequelize.STRING
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Friends', 'emailAddress');
  }
};
