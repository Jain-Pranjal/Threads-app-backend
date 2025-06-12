# Threads-app-backend

- yarn init
- yarn add typescript -D  # TypeScript as a dev dependency
- yarn add express
- yarn add @types/express -D
- npx tsc --init    # create tsconfig.json
- yarn add tsc-watch -D  # to compile the code and simultaneously watch for changes
- now change the in and out directories in tsconfig.json

<br/>
for the dev script in package.json

```json
"scripts": {
  "dev": "tsc-watch --onSuccess \"node build/index.js\""
}

<!-- it means that when it successfully build it should run the build one code  -->
```

using the [express middleware]({https://www.apollographql.com/docs/apollo-server/api/express-middleware#expressmiddleware}) to connect Apollo Server with Express

- we have use the apolo server in the same port as the express server but to access the apollo server we need to use the /graphql endpoint 
- /var/lib/postgresql/data is the default data directory for PostgreSQL when running in a Docker container. This is where PostgreSQL stores all of its database files.


## prisma connection with docker postgres
when u use the docker compose up -d command 
- then use the docker exec -it <container_id> bash command to enter the container
- su postgres (which is the user name)
- psql (to enter the postgres shell)


## prisma 
```bash
npx prisma init :- make the prisma folder and create the schema.prisma file
npx prisma migrate dev --name init :- to create the initial migration and update the database
```

## to find who is the curernt user making the request we will use the context in the apollo server
<br/>

- every third parameter of the resolver function is the **context** and we can pass the context so that user info can be accessed in the resolver function in every request

- for integrating with next js we have to use the [@as-integrations/next](https://www.npmjs.com/package/@as-integrations/next)
- for client side we have to use the [@apollo/client](https://www.npmjs.com/package/@apollo/client-integration-nextjs?ref=pkgstats.com/)


<br/>
- for finding the current user we can use context and for each request we can pass the user token in the context


## Context in Apollo Server
so bascially we need to pass the context in the main config file of the apollo server and then we can access that context in the resolver function as the third parameter of the resolver function

WE ARE PASSING THE DECODED TOKEN IN THE CONTEXT SO THAT WE CAN ACCESS THE USER INFO IN THE RESOLVER FUNCTION AND FIND THE CURRENT USER MAKING THE REQUEST 