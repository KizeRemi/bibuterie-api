const dogBreedRepository = require('../repository/postgresDogBreedRepository');

const dogBreedResolver = {
  Query: {
    getDogBreeds: (_, input, { postgresDb }) => dogBreedRepository.getDogBreeds(postgresDb),
  },
};

module.exports = dogBreedResolver;