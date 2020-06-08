const config = require('./knexfile');


const database = require('knex')({
  pool: { min: 0, max: 5 },
  ...config['dev'],
});

module.exports = database;