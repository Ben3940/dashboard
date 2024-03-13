import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { Controller } from './controller.js';

const PORT: number = 4000;
const db = new Controller();

const resolvers = {
  // Defines how GraphQL handles resolving union types
  Item: {
    __resolveType(obj) {
      if (obj.Category) {
        return 'Product';
      } else if (obj.City) {
        return 'Location';
      } else if (obj.Sales) {
        return 'Sale';
      }
    },
  },

  Query: {
    products(parent, args) {
      return db.get_table_items('Products', args.start_idx, args.range);
    },
    locations() {
      return db.get_locations();
    },
    sales() {
      return db.get_sales();
    },
    table_items(parent, args) {
      return db.get_table_items(args.table_name, args.start_idx, args.range);
    },
    category_quantities() {
      return db.get_category_quantities();
    },
  },

  Location: {
    Product(parent, args) {
      return db.get_table_items('Products', parent.ID);
    },
  },

  Sale: {
    Product(parent, args) {
      return db.get_table_items('Products', parent.ID);
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
