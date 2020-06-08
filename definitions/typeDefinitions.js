const { mergeTypes } = require('merge-graphql-schemas');
const dogSheet = require('./types/dogSheet');
const dogBreed = require('./types/dogBreed');
const dogFarm = require('./types/dogFarm');
const dogClassified = require('./types/dogClassified');

module.exports = mergeTypes(
  [
    dogSheet,
    dogBreed,
    dogFarm,
    dogClassified,
  ],
  { all: true }
);