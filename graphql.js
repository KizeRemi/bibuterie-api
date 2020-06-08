const { ApolloServer, gql } = require('apollo-server');
const AWS = require('aws-sdk');

const typeDefs = require('./definitions/typeDefinitions');
const resolvers = require('./resolvers');
const postgresDatabase = require('./database');
const { dynamoDatabase } = require('./dynamodb');

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({ region: 'eu-west-1' });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const accessToken = req.headers.authorization || '';
    let data = null;
    if (accessToken) {
      data = await cognitoidentityserviceprovider.getUser({ AccessToken: accessToken }).promise();
    }

    console.log(resolvers);
    return {
      user: data && data.Username,
      dynamoDb: dynamoDatabase,
      postgresDb: postgresDatabase,
    }
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});