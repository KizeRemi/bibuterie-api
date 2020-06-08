const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    getDogFarmByUserCognitoId(userCognitoId: ID!): DogFarm
  }

  type Mutation {
    addDogFarm(input: DogFarmInput!): Boolean
  }

  type DogFarm {
    id: ID!
    description: String!
    name: String!
    town: String!
    dogBreed: DogBreed!
    zipCode: Int!
    hasShop: Boolean!
  }

  input DogFarmInput {
    description: String!
    name: String!
    town: String!
    address: String!
    hasShop: Boolean
    zipCode: Int!
  }
`;