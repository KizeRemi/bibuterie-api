const { v4: uuidv4 } = require('uuid');

const USER_DOG_BREED_LIKE_TABLE_NAME = 'user_dog_breed_like_table';

module.exports.addDogBreedLike = (ddb, dogBreedId, userCognitoName,) =>
  ddb
    .insert({
      id: uuidv4(),
      user_cognito_name: userCognitoName,
      dog_breed_id: dogBreedId,
    })
    .into(USER_DOG_BREED_LIKE_TABLE_NAME)
    .returning('*');

module.exports.deleteDogBreedLike = (ddb, dogBreedId, userCognitoName) =>
  ddb
    .from(USER_DOG_BREED_LIKE_TABLE_NAME)
    .where({ dog_breed_id: dogBreedId, user_cognito_name: userCognitoName })
    .del();

module.exports.getUserDogBreedsLiked = (ddb, userCognitoName) =>
  ddb
    .from(USER_DOG_BREED_LIKE_TABLE_NAME)
    .where({ user_cognito_name: userCognitoName });

module.exports.countDogBreedLikeByDogBreed = (ddb, dogBreedId) =>
  ddb
    .from(USER_DOG_BREED_LIKE_TABLE_NAME)
    .count('dog_breed_id as like')
    .where({ dog_breed_id: dogBreedId })
    .limit(1);

module.exports.getUserDogBreedsLikedByUserAndDogBreed = (ddb, dogBreedId, userCognitoName) =>
  ddb
    .from(USER_DOG_BREED_LIKE_TABLE_NAME)
    .where({ user_cognito_name: userCognitoName, dog_breed_id: dogBreedId })
    .limit(1);