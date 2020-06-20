const { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    addDogClassifiedLike(dogClassifiedId: ID!): Boolean
  }

  type Query {
    getUserDogClassifiedsLiked: [DogClassifiedLike]
  }

  type DogClassifiedLike {
    user: ClassifiedUser!
  }
`;