const { v4: uuidv4 } = require('uuid');

const DOG_FARM_TABLE_NAME = 'dog_farm_table';

module.exports.getDogFarmByuserCognitoId = (ddb, userCognitoId) =>
  ddb
    .from(DOG_FARM_TABLE_NAME)
    .where('user_cognito_id', userCognitoId)
    .first();

module.exports.addDogFarm = (ddb, { hasShop, zipCode, ...input }, userCognitoId) => {
  return ddb
    .insert({
      id: uuidv4(),
      user_cognito_id: userCognitoId,
      zip_code: zipCode,
      has_shop: hasShop,
      ...input,
    })
    .into(DOG_FARM_TABLE_NAME)
    .returning('*');
};
