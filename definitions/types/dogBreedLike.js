const { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    toggleDogBreedLike(dogBreedId: ID!): Boolean
  }

  type Query {
    getUserDogBreedsLiked: [DogBreedLike]
  }

  type DogBreedLike {
    user: ClassifiedUser!
    dogBreedId: ID!
  }
`;