# API Friendzy

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Challenge](#challenge)
- [Submission](#submission)
- [License](#license)

## Background

The API Friendzy app allows for the retrieval of Friends.

## Install

_This repository uses node 8.8.1_

To get started, run the following commands:

1. NPM Install
```
  npm install
```
2. Migrate the development DB
```
  NODE_ENV=development ./node_modules/.bin/sequelize db:create && NODE_ENV=development ./node_modules/.bin/sequelize db:migrate
```
3. Migrate the test DB
```
  NODE_ENV=test ./node_modules/.bin/sequelize db:create && NODE_ENV=test ./node_modules/.bin/sequelize db:migrate
```
4. Seed the DB and exit the shell
```
  NODE_ENV=development ./node_modules/.bin/sequelize db:seed:all
```
5. Check the tests
```
  npm run test
```
6. Lint
```
  npm run lint
```
7. Run the web app
```
  npm start
```
8. Visit [`http://localhost:3000`](http://localhost:3000)

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

This is a three part challenge, please give yourself 3-4 hours to complete the challenge. We mean this when we say it, don't
take longer than 4 hours. This statement is not because we want to see how much you can do in 4 hours, it's more because we
don't want to be unreasonable (we know how valuable your time is). If you feel that you could have done more, please mention
what you would have done if you had more time at your time of submission.

At the moment this codebase provides an API for a list of so called "friends". It allows you to view all friends and also view
an individual friend through the `GET /api/friends` and `GET /api/friends/:id` end points. There is also a basic HTML page
which is displayed when you visit `GET /`.

The API is tested but feel free to add additional tests where you feel applicable.

### Challenge one

Add an email address field to the `Friend` table. This codebase uses the [Sequelize](http://docs.sequelizejs.com/) package for the ORM. This field
should be visible when you hit either `GET /api/friends` or `GET /api/friends/:id`.

### Challenge two

The `GET /api/friends` endpoint currently returns all friends in the system. We would like to be able to filter these friends by the fields below:

- Email Address
- First Name
- Last Name

The filter should allow the API consumer to filter via a GET parameter like so:

`API /api/friends?filter=Jane`

This should allow wildcard matching and should return any records which have the given string anywhere in the fields. <- what is this called?

### Challenge three

Currently there is no way to display these records to the user. We have a [`build/index.html`](https://github.com/Flynotes/api-friendzy/blob/master/build/index.html) file which is displayed to users on the route `GET /`.

We would like you to consume the `GET /api/friends` endpoint and display friends to the user on the `GET /` route.
As a user you should be able to filter the records via an input, which submits to the `API /api/friends?filter=${value}` endpoint you built in
challenge two.

We would also like the users to be able to view details of the user by making use of the
`GET /api/friends/:id` end point. How this is implemented is up to you, go be creative!
It's important to note that **this view does not have to survive a page refresh**.

In this challenge we would like to see your ability to use Vue.js, React or any other reactive front end technologies which you feel comfortable with. We do not have
a module bundler in the application and do not expect you to set one up in this challenge. Please feel free to include your technology of choice through
a simple script tag.

## Submission

You will have been invited to a fork of the main repository. We would like you to create a branch.
Once you have completed the challenge or the four hours is up, whichever comes first, we would like you to create a pull request. Please
submit this pull request as if you were working on an production environment.
From there we will review your pull request, and that is the end of the technical challenge.

## License

© Acea Health
