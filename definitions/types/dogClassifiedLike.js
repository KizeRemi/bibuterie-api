const { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    toggleDogClassifiedLike(dogClassifiedId: ID!): Boolean
  }

  type Query {
    getUserDogClassifiedsLiked: [DogClassifiedLike]
  }

  type DogClassifiedLike {
    user: ClassifiedUser!
    dogClassifiedId: ID!
  }
`;