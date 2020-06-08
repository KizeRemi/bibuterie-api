'use strict';

const config = {
  dev: {
    client: 'pg',
    connection: {
      host: 'bibuterie-db-dev.cygwulxkyoyy.eu-west-1.rds.amazonaws.com',
      user: 'postgres',
      password: 'toCxT9lNYcDKvTRUeN0x',
      database: 'postgres',
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/dev',
    },
  },
};

module.exports = config;