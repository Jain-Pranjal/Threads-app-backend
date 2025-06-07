# Threads-app-backend

yarn init
yarn add typescript -D  # TypeScript as a dev dependency
yarn add express
yarn add @types/express -D
npx tsc --init    # create tsconfig.json
yarn add tsc-watch -D  # to compile

- now change the in and out directories in tsconfig.json

using the [express middleware]({https://www.apollographql.com/docs/apollo-server/api/express-middleware#expressmiddleware}) to connect Apollo Server with Express

- we have use the apolo server in the same port as the express server but to access the apollo server we need to use the /graphql endpoint 