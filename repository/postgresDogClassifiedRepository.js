const { v4: uuidv4 } = require('uuid');

const DOG_CLASSIFIED_TABLE_NAME = 'dog_classified_table';

module.exports.getDogClassifieds = (ddb, { limit = 10, offset = 0, type }) =>
  ddb
    .from(DOG_CLASSIFIED_TABLE_NAME)
    .orderBy('created_at')
    .where('type', type)
    .limit(limit)
    .offset(offset);

module.exports.addDogClassified = (ddb, {
  isVaccinated, isDewormed, isLof, numberId, birthDate, dogBreed, ...input
}, userCognitoName) => {
  return ddb
    .insert({
      id: uuidv4(),
      is_vaccinated: isVaccinated,
      is_dewormed: isDewormed,
      is_lof: isLof,
      number_id: numberId,
      birth_date: birthDate,
      dog_breed_id: dogBreed,
      user_cognito_name: userCognitoName,
      ...input,
    })
    .into(DOG_CLASSIFIED_TABLE_NAME)
    .returning('*');
};
