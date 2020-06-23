const { v4: uuidv4 } = require('uuid');

const DOG_CLASSIFIED_TABLE_NAME = 'dog_classified_table';

module.exports.getDogClassifieds = (ddb, { limit = 10, offset = 0, type = null, dogBreedId = null, gender = null }) =>
  ddb
    .from(DOG_CLASSIFIED_TABLE_NAME)
    .orderBy('created_at')
    .modify(query => {
      if (type) {
        query.andWhere('type', type);
      }
      if (dogBreedId) {
        query.andWhere('dog_breed_id', dogBreedId) 
      }
      if (gender) {
        query.andWhere('gender', gender) 
      }
      return query;
    })
    .limit(limit)
    .offset(offset);

module.exports.getDogClassifiedById = (ddb, dogClassifiedId) =>
  ddb
    .from(DOG_CLASSIFIED_TABLE_NAME)
    .orderBy('created_at')
    .where('id', dogClassifiedId)
    .limit(1);

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
