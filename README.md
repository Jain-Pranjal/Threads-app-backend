# Threads-app-backend

- yarn init
- yarn add typescript -D  # TypeScript as a dev dependency
- yarn add express
- yarn add @types/express -D
- npx tsc --init    # create tsconfig.json
- yarn add tsc-watch -D  # to compile


- now change the in and out directories in tsconfig.json

using the [express middleware]({https://www.apollographql.com/docs/apollo-server/api/express-middleware#expressmiddleware}) to connect Apollo Server with Express

- we have use the apolo server in the same port as the express server but to access the apollo server we need to use the /graphql endpoint 
- /var/lib/postgresql/data is the default data directory for PostgreSQL when running in a Docker container. This is where PostgreSQL stores all of its database files.


## prisma connection with docker postgres
when u use the docker compose up -d command 
- then use the docker exec -it <container_id> bash command to enter the container
- su postgres (which is the user name)
- psql (to enter the postgres shell)

## to find who is the curernt user making the request we will use the context in the apollo server
<br/>

- every third parameter of the resolver function is the context and we can pass the context so that user info can be accessed in the resolver function in every request