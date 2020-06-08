const { v4: uuidv4 } = require('uuid');

const DOG_BREED_TABLE_NAME = 'dog_breed_table';

module.exports.getDogBreedById = (ddb, dogBreedId) =>
  ddb
    .from(DOG_BREED_TABLE_NAME)
    .where('id', dogBreedId)
    .first();

module.exports.getDogBreeds = (ddb) =>
  ddb
    .from(DOG_BREED_TABLE_NAME);
