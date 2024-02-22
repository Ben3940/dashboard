export const typeDefs = `#graphql
    type Product {
        id: ID!
        category: String!
        sub_category: String!
        quantity: Int!
    }

    type Location {
        city: String!
        state: String!
        postal_code: String!
        region: String!
        product: [Product]!
    }

    type Sale {
        sales: Float!
        discount: Float!
        profit: Float!
        product: Product
    }

    type Query {

    }
`;
