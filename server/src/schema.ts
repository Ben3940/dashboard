export const typeDefs = `#graphql
    type Product {
        id: ID!
        category: String!
        sub_category: String!
        quantity: Int!
    }

    type Location {
        id: ID!
        city: String!
        state: String!
        postal_code: String!
        region: String!
        product: [Product]!
    }

    type Sale {
        id: ID!
        sales: Float!
        discount: Float!
        profit: Float!
        product: Product
    }

    type Query {
        products: [Product]
        locations: [Location]
        sales: [Sale]
    }
`;
