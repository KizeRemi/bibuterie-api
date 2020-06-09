const config = require('./knexfile');

const environment = process.env.NODE_ENV || 'local';

const database = require('knex')({
  pool: { min: 0, max: 5 },
  ...config[environment],
});

module.exports = database;