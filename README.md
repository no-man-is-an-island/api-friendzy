# API Friendzy

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Challenge](#challenge)
- [License](#license)

## Background

The API Friendzy app allows for the creation, storage and retrieval of Friends.

## Install

To get started, run the following commands:

1. Migrate the development DB
```
  NODE_ENV=development sequelize db:create && NODE_ENV=development sequelize db:migrate
```
2. Migrate the test DB
```
  NODE_ENV=test sequelize db:create && NODE_ENV=test sequelize db:migrate
```
3. Seed the DB and exit the shell
```
  NODE_ENV=development sequelize db:seed:all
```
4. Check the tests
```
  npm run test
```
5. Lint
```
  npm run lint
```
6. Run the web app
```
  npm start
```
7. Visit [`http://localhost:3000`](http://localhost:3000)

## Usage

**Running the app**

1. Run the web app
```
  npm start
```

2. Wait for the app to boot then hit the app URL [`http://localhost:3000`](http://localhost:3000)

**Linting**

```
  npm run lint
```

## Challenge

This is a three part challenge, in which there are three steps to try and complete.

1. Add email address to the User field. We are using sequlize to manage database migrations etc.
2. Allow filtering by name/email the API index action
3. Display the records on localhost:3000 via either react / vue / angular etc. You should be able to filter the records and view the records in some format - this does not have to survive a page refresh.

Give yourself 3-4 hours to complete the task, longer is a waste of time and feel free to mention what you would have done if you had more time.

There are tests in the system, but feel free to add to them where you feel necessary.

## License

© Acea Health
