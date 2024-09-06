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

> `rw` is short for `redwood`


## Frontend first with Storybook

Don't know what your data models look like? That's more than ok—Redwood integrates Storybook so that you can work on design without worrying about data. Mockup, build, and verify your React components, even in complete isolation from the backend:

```
yarn rw storybook
```

Seeing "Couldn't find any stories"? That's because you need a `*.stories.{tsx,jsx}` file. The Redwood CLI makes getting one easy enough—try generating a [Cell](https://redwoodjs.com/docs/cells), Redwood's data-fetching abstraction:

```
yarn rw generate cell examplePosts
```

Redwood is designed for both serverless deploy targets like Netlify and Vercel and serverful deploy targets like Render and AWS:

```
yarn rw setup deploy --help
```

Don't go live without auth! Lock down your app with Redwood's built-in, database-backed authentication system ([dbAuth](https://redwoodjs.com/docs/authentication#self-hosted-auth-installation-and-setup)), or integrate with nearly a dozen third-party auth providers:

```
yarn rw setup auth --help
```
