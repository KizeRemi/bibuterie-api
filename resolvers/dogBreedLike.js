const dogBreedLikeRepository = require('../repository/postgresDogBreedLikeRepository');
const { ValidationError } = require ('apollo-server');

const dogBreedLikeResolver = {
  Mutation: {
    toggleDogBreedLike: async (_, { dogBreedId }, { user, postgresDb }) => {
      const hasAlreadyLikeDogBreed = await dogBreedLikeRepository.getUserDogBreedsLikedByUserAndDogBreed(
        postgresDb, dogBreedId, user
      )
      try {
        if (hasAlreadyLikeDogBreed.length > 0) {
          return Boolean(await dogBreedLikeRepository.deleteDogBreedLike(postgresDb, dogBreedId, user));
        };

        return Boolean(await dogBreedLikeRepository.addDogBreedLike(postgresDb, dogBreedId, user));
      } catch(e) {
        console.log(e)
        throw e;
      }
    },
  },
  Query: {
    getUserDogBreedsLiked: async (_, __, { user, postgresDb }) => {
      const dogBreedsLiked = await dogBreedLikeRepository.getUserDogBreedsLiked(postgresDb, user);

      return dogBreedsLiked.map(({ dog_breed_id, ...dogBreed }) => ({
        dogBreedId: dog_breed_id,
        ...dogBreed,
      }))
    },
  },
};

module.exports = dogBreedLikeResolver;