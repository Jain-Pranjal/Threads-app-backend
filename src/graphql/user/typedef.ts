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

// yeha jhum type ko lkhte hai ke aapk efrontenme me aap kya luya access kar skte ho means ke fe par jab bhi hum query ko marege to aap kya lya accesaknre k elayak hai anmd kya nnhi vo apa apni type me likhte ia 