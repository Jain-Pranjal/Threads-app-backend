export const mutationsType = `#graphql

createUser(
    firstName: String!
    lastName: String
    email: String!
    password: String!
    profileImageURL: String
): String
`

// all these are the parameters that we want to take from the user while creating a new user
//  ! means that this field is required and we are returning a string which is the id of the created user

// this is the schema for the mutations that is required by the server to create a user and this is for the graphql server  