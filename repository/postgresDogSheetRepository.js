const { v4: uuidv4 } = require('uuid');

const DOG_SHEET_TABLE_NAME = 'dog_sheet_table';

module.exports.getDogSheetByDogBreedId = (ddb, dogBreedId) =>
  ddb
    .from(DOG_SHEET_TABLE_NAME)
    .where('dog_breed_id', dogBreedId)
    .first();

module.exports.addDogSheet = (ddb, input) => {
  return ddb
    .insert({
      id: uuidv4(),
      dog_breed_id: input.breed,
      description: input.description
    })
    .into(DOG_SHEET_TABLE_NAME)
    .returning('*');
};
