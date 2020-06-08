const { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    addDogClassified(input: DogClassifiedInput!): Boolean
  }

  type Query {
    getDogClassifieds: [DogClassified]
  }

  type DogClassified {
    name: String!
    birthDate: String!
    isVaccinated: Boolean!
    isDewormed: Boolean!
    isLof: Boolean!
    numberId: String!
    description: String
    createdAt: String!
    dogBreed: DogBreed!
    classifiedUser: ClassifiedUser!
  }

  type ClassifiedUser {
    name: String!,
    picture: String,
  }

  input DogClassifiedInput {
    name: String!
    birthDate: String!
    isVaccinated: Boolean!
    isDewormed: Boolean!
    isLof: Boolean
    numberId: String!
    description: String
    dogBreed: ID!
  }
`;