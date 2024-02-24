import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { Controller } from './controller.js';

const PORT: number = 4000;
const db = new Controller();

const resolvers = {
  Query: {
    products() {
      return db.get_products();
    },
    locations() {
      return db.get_locations();
    },
    sales() {
      return db.get_sales();
    },
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
