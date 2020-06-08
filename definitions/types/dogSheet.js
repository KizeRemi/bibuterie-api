const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    getDogSheetByDogBreedId(dogBreedId: ID!): DogSheet
  }

  type Mutation {
    addDogSheet(input: DogSheetInput!): Boolean
  }

  type DogSheet {
    id: ID!
    description: String!
    dogBreed: DogBreed!
  }

  input DogSheetInput {
    dogBreedId: ID!
    description: String!
  }
`;