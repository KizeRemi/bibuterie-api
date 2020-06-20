const dogClassifiedRepository = require('../repository/postgresDogClassifiedRepository');
const dogBreedRepository = require('../repository/postgresDogBreedRepository');
const AWS = require('aws-sdk');

const dogClassifiedResolver = {
  DogClassified: {
    classifiedUser: async ({ user_cognito_name }) => {
      var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({ region: 'eu-west-1' });
      const user = await cognitoidentityserviceprovider.adminGetUser({ Username: user_cognito_name, UserPoolId: 'eu-west-1_K2m1icWIj' }).promise();

      return {
        name: user.UserAttributes[3].Value,
        picture: user.UserAttributes[7].Value,
      };
    },
    dogBreed: (dogClassified, _, { postgresDb }) => dogBreedRepository.getDogBreedById(postgresDb, dogClassified.dog_breed_id)
  },
  Mutation: {
    addDogClassified: async (_, { input }, { user, postgresDb }) => {
      return Boolean(dogClassifiedRepository.addDogClassified(postgresDb, input, user));
    },
  },
  Query: {
    getDogClassifieds: async (_, params, { postgresDb }) => {
      return dogClassifiedRepository.getDogClassifieds(postgresDb, params);
    },
  },
};

module.exports = dogClassifiedResolver;