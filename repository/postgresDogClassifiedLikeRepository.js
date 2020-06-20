const { v4: uuidv4 } = require('uuid');

const USER_DOG_CLASSIFIED_LIKE_TABLE_NAME = 'user_dog_classified_like_table';

module.exports.addDogClassifiedLike = (ddb, dogClassifiedId, userCognitoName,) =>
  ddb
    .insert({
      id: uuidv4(),
      user_cognito_name: userCognitoName,
      dog_classified_id: dogClassifiedId,
    })
    .into(USER_DOG_CLASSIFIED_LIKE_TABLE_NAME)
    .returning('*');


module.exports.getUserDogClassifiedsLiked = (ddb, userCognitoName) =>
  ddb
    .from(USER_DOG_CLASSIFIED_LIKE_TABLE_NAME)
    .where({ user_cognito_name: userCognitoName });

module.exports.getUserDogClassifiedsLikedByUserAndDogClassified = (ddb, dogClassifiedId, userCognitoName) =>
  ddb
    .from(USER_DOG_CLASSIFIED_LIKE_TABLE_NAME)
    .where({ user_cognito_name: userCognitoName, dog_classified_id: dogClassifiedId })
    .limit(1);