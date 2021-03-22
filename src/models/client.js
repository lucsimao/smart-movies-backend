const Sequelize = require('sequelize');
const database = require('../config/db/db-config');

const Client = database.define('client', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
}
);

module.exports = Client;
