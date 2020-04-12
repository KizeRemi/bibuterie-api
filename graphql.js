const { ApolloServer: ApolloServerLambda, gql } = require('apollo-server-lambda');
const { ApolloServer } = require('apollo-server');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const serverLambda = new ApolloServerLambda({ typeDefs, resolvers, playground: true,  context: ({ event, context }) => {
  console.log(event.requestContext.authorizer.claims);
  return ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  })
}, });


exports.handler = serverLambda.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});
