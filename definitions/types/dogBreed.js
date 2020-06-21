const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    getDogBreeds(search: String, orderBy: BREED_ORDER_BY): [DogBreed]
  }

  type DogBreed {
    id: ID!
    name: String!
    image: String
    like: Int!
  }

  enum BREED_ORDER_BY {
    ALPHABETIC
    POPULARITY
    MOST_COMMENTS
  }
`;