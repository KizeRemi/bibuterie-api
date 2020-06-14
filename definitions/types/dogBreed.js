const { gql } = require('apollo-server');

module.exports = gql`
  type DogBreed {
    id: ID!
    name: String!
    image: String
  }

  type Query {
    getDogBreeds(search: String, orderBy: BREED_ORDER_BY): [DogBreed]
  }

  enum BREED_ORDER_BY {
    ALPHABETIC
    POPULARITY
    MOST_COMMENTS
  }
`;