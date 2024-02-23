export const typeDefs = `#graphql
    type Product {
        ID: ID!
        Category: String!
        Sub_Category: String!
        quantity: Int!
    }

    type Location {
        ID: ID!
        City: String!
        State: String!
        Postal_Code: String!
        Region: String!
        Product_ID: [Product]!
    }

    type Sale {
        ID: ID!
        Sales: Float!
        Discount: Float!
        Profit: Float!
        Product: Product!
    }

    type Query {
        locations: [Location]
        
    }
`;
