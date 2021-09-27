const { ApolloServer } = require('apollo-server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

const _ = require('../env');
const Query = require('./resolvers/Query');
const typeDefs = require('./schema');

// Note. If you want to use the functions instead the class
// just comment this require and uncomment the bellow lines.
const ArtworkAPI = require('./api/ArtworkAPI');
// const getCollection = require('./api/getCollection');
// const getDetails = require('./api/getDetails');

const PORT = process.env.PORT || 4002;

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    artworkAPI: new ArtworkAPI(),
    // Note. To switch between the class and the function
    // just replace this lines.
    // artworkAPI: { getCollection, getDetails },
  }),
  resolvers: {
    Query,
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  introspection: process.env.NODE_ENV !== 'production',
});

server
  .listen({ port: PORT })
  .then(({ url }) => `🚀 Graphql server listening on ${url}`)
  .then(console.log)
  .catch(console.error);
