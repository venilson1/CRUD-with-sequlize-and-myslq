const connection = require('../database/db');
const { Sequelize } = require('sequelize');

const Test = connection.define('Names', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

// Test.sync({force: false}).then(()=> {
//   console.log('\033[0;34m created table Test');
// })

module.exports = Test;