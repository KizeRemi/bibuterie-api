const dogClassifiedLikeRepository = require('../repository/postgresDogClassifiedLikeRepository');
const { ValidationError } = require ('apollo-server');

const dogClassifiedLikeResolver = {
  Mutation: {
    toggleDogClassifiedLike: async (_, { dogClassifiedId }, { user, postgresDb }) => {
      const hasAlreadyLikeDogClassified = await dogClassifiedLikeRepository.getUserDogClassifiedsLikedByUserAndDogClassified(
        postgresDb, dogClassifiedId, user
      )
      try {
        if (hasAlreadyLikeDogClassified.length > 0) {
          return Boolean(await dogClassifiedLikeRepository.deleteDogClassifiedLike(postgresDb, dogClassifiedId, user));
        };

        return Boolean(await dogClassifiedLikeRepository.addDogClassifiedLike(postgresDb, dogClassifiedId, user));
      } catch(e) {
        console.log(e)
        throw e;
      }
    },
  },
  Query: {
    getUserDogClassifiedsLiked: async (_, __, { user, postgresDb }) => {
      const dogClassifiedsLiked = await dogClassifiedLikeRepository.getUserDogClassifiedsLiked(postgresDb, user);

      return dogClassifiedsLiked.map(({ dog_classified_id, ...dogClassified }) => ({
        dogClassifiedId: dog_classified_id,
        ...dogClassified,
      }))
    },
  },
};

module.exports = dogClassifiedLikeResolver;