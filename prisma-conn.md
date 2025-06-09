Certainly! Here are the steps to use **standard PostgreSQL** with Prisma:
---

### 1. **Set up a PostgreSQL Database**

You can use a local PostgreSQL instance, a Docker container, or a managed service (like AWS RDS, Heroku, etc.).  
For local development, you can use Docker Compose as shown below:

```yaml
# docker-compose.postgres.yml
version: '3.7'

services:
  postgres:
    image: postgres:15
    restart: always
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=prisma
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Start the database:

```sh
docker compose -f docker-compose.postgres.yml up -d
```
[How to use Prisma in Docker](https://www.prisma.io/docs/guides/docker#2-set-up-a-postgresql-database-with-docker-compose)

---

### 2. **Install Prisma in Your Project**

Navigate to your project directory and install Prisma:

```sh
npm install prisma --save-dev
```
[Add Prisma ORM to an existing project (TypeScript and PostgreSQL)](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql)

---

### 3. **Initialize Prisma**

Run the following command to create your Prisma setup:

```sh
npx prisma init --datasource-provider postgresql
```

This creates a `prisma/schema.prisma` file and a `.env` file.

---

### 4. **Configure the Connection URL**

Edit your `.env` file to use the standard PostgreSQL connection string:

```env
DATABASE_URL="postgresql://postgres:prisma@localhost:5432/postgres?schema=public"
```
[Connect your database using JavaScript and PostgreSQL](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-node-postgresql)

---

### 5. **Update Your Prisma Schema**

Ensure your `prisma/schema.prisma` has the correct datasource block:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
[Connect your database using TypeScript and PostgreSQL](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql)

---

### 6. **Create Your Data Model**

Edit `prisma/schema.prisma` to define your models.

---

### 7. **Run Migrations**

To create your database tables, run:

<!-- Everytime we make the changes to the schema, we need to run this command -->

```sh
npx prisma migrate dev --name init
```
[How to use Prisma in Docker](https://www.prisma.io/docs/guides/docker#2-set-up-a-postgresql-database-with-docker-compose)

---

### 8. **Generate Prisma Client**

```sh
npx prisma generate
```

---

You are now set up to use **standard PostgreSQL** with Prisma!  
If you need to connect to an existing database, you can use `npx prisma db pull` to introspect your schema.

If you have any specific setup (like using a managed PostgreSQL service), just update the `DATABASE_URL` accordingly.

