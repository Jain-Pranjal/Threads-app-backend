// here we will write the schema for the user
export const typeDefs = `#graphql
    type User {
        id: ID!
        firstName: String!
        lastName: String
        email: String!
        profileImageURL: String
    }

`;