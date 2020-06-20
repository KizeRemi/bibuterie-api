const { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    addDogClassified(input: DogClassifiedInput!): Boolean
  }

  type Query {
    getDogClassifieds(limit: Int, offset: Int, type: DogClassifiedType, dogBreedId: ID): [DogClassified]
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
    type: DogClassifiedType!
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
    type: DogClassifiedType!
    gender: Gender!
  }

  enum DogClassifiedType {
    DONATION
    SELL
  }

  enum Gender {
    MALE
    FEMALE
  }
`;