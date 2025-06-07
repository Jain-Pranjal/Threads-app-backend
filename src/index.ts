import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';

import cors from 'cors';


async function init(){
const app = express();
const PORT = Number(process.env.PORT) || 8000;


// making the apollo server
const gqlServer = new ApolloServer({
    typeDefs: `
    # This is a simple GraphQL schema
    type Myhello{
        message: String
        user: String
        roll: Int
    }

    type Query {
        hello: Myhello
        say(name: String!, age: Int!): String
    }
    `,

    resolvers: {
        Query: {
            hello: () => ({
                message: 'Hello, World from GraphQL!',
                user: 'John Doe',
                roll: 1
            }),
            say: (_: any, args: { name: string , age: number }) => {
                return `Hello, ${args.name}! You are ${args.age} years old.`;
            }

        }
    }
});


// Start the Apollo server
await gqlServer.start();



app.get('/', (req, res) => {
    res.json({
        message: 'Hello, World!'
    });
});

// routing for GraphQL
app.use(
  '/graphql',
  express.json(),
  cors<cors.CorsRequest>(),
  expressMiddleware(gqlServer),
);
// at /graphql it will open the UI of GraphQL playground




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
}

// calling the main function to start the server
init();
