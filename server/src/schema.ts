export const typeDefs = `#graphql

    type Product {
        ID: ID!
        Category: String!
        Sub_Category: String!
        Quantity: Int!
    }

    type Location {
        ID: ID!
        City: String!
        State: String!
        Postal_Code: String!
        Region: String!
        Product: [Product]!
    }

    type Sale {
        ID: ID!
        Sales: Float!
        Discount: Float!
        Profit: Float!
        Product: [Product]!
    }

    type Category_Quantity {
        Category: String!
        Quantity: Int!
    }

    union Item = Product | Location | Sale

    type Query {
        products(start_idx:Int, range:Int): [Product]
        locations: [Location]
        sales: [Sale]
        category_quantities: [Category_Quantity]
        table_items(table_name:String!, start_idx:Int, range:Int): [Item]
    }
`;
