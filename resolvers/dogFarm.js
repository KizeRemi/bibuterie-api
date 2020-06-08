const { ValidationError } = require('apollo-server');

const dogFarmRepository = require('../repository/postgresDogFarmRepository');

const dogFarmResolver = {
  Mutation: {
    addDogFarm: async (_, { input }, { user, postgresDb }) => {
      if (dogFarmRepository.getDogFarmByuserCognitoId(postgresDb, user)) {
        throw new ValidationError('User has already a farm dog.');
      }

      return dogFarmRepository.addDogFarm(postgresDb, input, user);
    },
  },
};

module.exports = dogFarmResolver;