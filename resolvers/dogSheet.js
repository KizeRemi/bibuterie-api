const dogBreedRepository = require('../repository/postgresDogBreedRepository');
const dogSheetRepository = require('../repository/postgresDogSheetRepository');

const dogSheetResolver = {
  DogSheet: {
    dogBreed: (dogSheet, _, { postgresDb }) =>
      dogBreedRepository.getDogBreedById(postgresDb, dogSheet.dog_breed_id)
  },
  Query: {
    getDogSheetByDogBreedId: (_, { dogBreedId }, { postgresDb }) => {
      return dogSheetRepository.getDogSheetByDogBreedId(postgresDb, dogBreedId);
    },
  },
  Mutation: {
    addDogSheet: async (_, { input }, { postgresDb }) => {
      return dogSheetRepository.addDogSheet(postgresDb, input);
    },
  },
};

module.exports = dogSheetResolver;