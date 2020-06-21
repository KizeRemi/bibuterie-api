const dogBreedRepository = require('../repository/postgresDogBreedRepository');
const dogBreedLikeRepository = require('../repository/postgresDogBreedLikeRepository');

const dogBreedResolver = {
  DogBreed: {
    like: async ({ id }, _, { postgresDb }) => {
      const [{ like }] = await dogBreedLikeRepository.countDogBreedLikeByDogBreed(postgresDb, id);

      return like;
    }
  },
  Query: {
    getDogBreeds: (_, params, { postgresDb }) => dogBreedRepository.getDogBreeds(postgresDb, params),
  },
};

module.exports = dogBreedResolver;