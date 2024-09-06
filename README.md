# README

Welcome to [RedwoodJS](https://redwoodjs.com)!

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (=20.x) and [Yarn](https://yarnpkg.com/)

Start by installing dependencies:

- As of Node.js v18+, Node.js ships with a CLI tool called Corepack to manage package managers. All you have to do is enable it, then you'll have Yarn:

corepack enable
yarn -v

- The version of Yarn will probably be 1.22.21, but don't worry—in your Redwood project, Corepack will know to use a modern version of Yarn because of the packageManager field in the root package.json.


- create a directory to the proejct
cd makalii-mysql-test

- install yarn (Package Manager)
yarn install

- run the local dev window to see your changes
yarn rw dev

Your browser should automatically open to [http://localhost:8910](http://localhost:8910) where you'll see the Welcome Page, which links out to many great resources.

- add the arrows library
yarn add lucide-react

- Add the charting library
yarn add react-chartjs-2 chart.js


- this project is in typescript so if you dont already have taht in there, run this command:

yarn rw setup tsconfig


## Prisma and the database


Redwood uses [Prisma](https://www.prisma.io/), a next-gen Node.js and TypeScript ORM, to talk to the database. Prisma's schema offers a declarative way of defining your app's data models. And Prisma [Migrate](https://www.prisma.io/migrate) uses that schema to make database migrations hassle-free:

```
yarn rw prisma migrate dev

# ...
```
> `rw` is short for `redwood`


> **Environment setup**

### Set Up Environment Variables

1. **Create a `.env` File**:
   - In the root directory of your project, create a `.env` file if it doesn't already exist.
   - Add the following line to the `.env` file:

     ```bash
     DATABASE_URL="mysql://mysql:7ca88e7e9989c76a@waiwai-prod.westus2.cloudapp.azure.com:559/hoku_zack_mysql"
     ```

   - This connection string includes:
     - **Username**: `mysql`
     - **Password**: `7ca88e7e9989c76a`
     - **Host**: `waiwai-prod.westus2.cloudapp.azure.com`
     - **Port**: `559`
     - **Database Name**: `hoku_zack_mysql`

yarn rw prisma migrate dev

yarn rw dev
