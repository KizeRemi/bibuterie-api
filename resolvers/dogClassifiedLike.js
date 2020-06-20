const dogClassifiedLikeRepository = require('../repository/postgresDogClassifiedLikeRepository');
const { ValidationError } = require ('apollo-server');

const dogClassifiedLikeResolver = {
  Mutation: {
    addDogClassifiedLike: async (_, { dogClassifiedId }, { user, postgresDb }) => {
      const hasAlreadyLikeDogClassified = await dogClassifiedLikeRepository.getUserDogClassifiedsLikedByUserAndDogClassified(
        postgresDb, dogClassifiedId, user
      )
      if (hasAlreadyLikeDogClassified > 0) {
        throw new ValidationError('Dog classified already like');
      };

      try {
        return Boolean(dogClassifiedLikeRepository.addDogClassifiedLike(postgresDb, dogClassifiedId, user));
      } catch(e) {
        console.log(e)
        throw e;
      }
    },
  },
  Query: {
    getUserDogClassifiedsLiked: async (_, __, { user, postgresDb }) => {
      return dogClassifiedRepository.getUserDogClassifiedsLiked(postgresDb, user);
    },
  },
};

module.exports = dogClassifiedLikeResolver;