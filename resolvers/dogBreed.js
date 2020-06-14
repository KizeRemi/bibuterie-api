const dogBreedRepository = require('../repository/postgresDogBreedRepository');

const dogBreedResolver = {
  Query: {
    getDogBreeds: (_, params, { postgresDb }) => dogBreedRepository.getDogBreeds(postgresDb, params),
  },
};

module.exports = dogBreedResolver;