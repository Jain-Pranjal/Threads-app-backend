import { ApolloServer } from "@apollo/server";
import {User} from "./user";

async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
            ${User.typeDefs}

    type Query {
        ${User.queriesType}
    }

    type Mutation {
        ${User.mutationsType}
    }
        `,
    resolvers: {


      Query: {
       ...User.resolvers.queries
      },

      Mutation: {
        ...User.resolvers.mutations
      },
    },
  });

  // Start the gql server
  await gqlServer.start();

  return gqlServer;
}

export default createApolloGraphqlServer;


// similarlly we can add more typedef and resolvers for other entities like Post, Comment, etc.