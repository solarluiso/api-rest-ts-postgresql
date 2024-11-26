# NODE JS: REST API (CRUD) with PostgreSQL and JWT

This repository contains a REST API built with Node.js and PostgreSQL, enabling CRUD operations (create, read, update, delete) on users using token-based authentication via JWT (Json Web Token).

## How to Use It:

1.  Clone the repository: `git clone https://github.com/solarluiso/api-rest-ts-postgresql`
2.  Open the project in your code editor and run the following command in your terminal: `npm install`
3.  Set up your environment variables by creating a `.env` file using the template provided.
4.  With Docker Desktop running, execute: `docker compose up -d`
5.  Start the server by running: `npm run dev`

## Requirements:

- **NODE**: Ensure Node.js is installed on your operating system.
- **DOCKER**: Required to run the MongoDB image in a container.
- **GIT**: Make sure Git is also installed.

## Steps to configure a project like this:

1. Initialize the project:
   `npm init -y`
2. Install the required packages:
   `npm install express jsonwebtoken bcrypt @prisma/client dotenv typescript`
   `npm install --save-dev ts-node-dev @types/express @types/jsonwebtoken @types/bcrypt @types/node rimraf prisma`
3. Initialize TypeScript configuration:
   `npx tsc --init --outDir dist/ --rootDir src`
4. Update the TypeScript configuration file with excluded and included folders:
   `"exclude": ["node_modules","dist" ],
"include": ["src"]`
5. Initialize Prisma:
   `npx prisma init`
6. Generate Prisma client:
   `npx prisma generate`
7. Add models in `schema.prisma`
8. Apply migrations:
   `npmx prisma migrate dev`
9. Start Docker Compose:
   `docker-compose up -d`
10. Add the following scripts to `package.json`:
    `"dev": "tsnd --respawn --clear src/app.ts", "build": "rimraf ./dist && tsc", "start": "npm run build && node dist/app.js"`

## METHODS

### POST

http://localhost:3000/auth/register
http://localhost:3000/users
http://localhost:3000/auth/login

### GET ALL

http://localhost:3000/users

### GET, PUT, DELETE BY ID

http://localhost:3000/users/:id
