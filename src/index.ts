import express from 'express';
import { expressMiddleware } from '@as-integrations/express5';
import createApolloGraphqlServer from './graphql';
import cors from 'cors';
import UserService from './services/user';


async function init(){
    const app = express();
    const PORT = Number(process.env.PORT) || 8000;

    app.get('/', (req, res) => {
        res.json({
            message: 'Hello, World!'
        });
    });

    // running the server
    const gqlServer = await createApolloGraphqlServer();

    // routing for GraphQL
    app.use(
    '/graphql',
    express.json(),
    cors<cors.CorsRequest>(),
    expressMiddleware(gqlServer,
        { context: async ({ req, res }) => {
            const token=req.headers["token"];
        try{
            const user=await UserService.decodeToken(token as string);
            return { user };
        }catch(err){
            return { user: null };
        }
    }})
);

// in the context we are decoding the token that is passed in the headers and getting the user information from it

    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
}

// calling the main function to start the server
init();

// passing the context so that every resolver have the info of the user that is logged in
// before going to the express middleware we are checking if the user is logged in or not by decoding the token that is passed in the headers