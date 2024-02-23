import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';

const PORT: number = 4000;

const resolvers = {
  Query: {
    products() {},
    locations() {},
    sales() {},
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`Started Apollo server on port ${PORT} at ${url}`);
