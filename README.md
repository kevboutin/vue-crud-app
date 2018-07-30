[![Build Status](https://travis-ci.org/kevboutin/vue-crud-app.svg?branch=master)](https://travis-ci.org/kevboutin/vue-crud-app) [![Dependency Status](https://david-dm.org/kevboutin/vue-crud-app.svg)](https://david-dm.org/kevboutin/vue-crud-app)

# vue-crud-app

> A Vue.js project designed to showcase a CRUD application. CRUD is an acronym for Create, Update and Delete and are the four basic functions associated with persistent storage.

## Getting Started

``` bash
# install dependencies
npm install

# run the back-end server at localhost:8081
node ./src/server

# run the following command in a different terminal to serve the UI with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# Debugging should be done by running the server (node command above), running the UI (npm command above) and then running a debug configuration (JavaScript debug) all at once.
```

### Endpoints

On the server we have the following controllers and endpoints:

Endpoint | Description
----------|------------
POST /posts | Create a post
GET /posts  | Get a listing of posts
GET /posts/:id | Get details about a post
PUT /posts/:id | Update a post
DELETE /posts/:id | Delete a post

### Protecting Endpoints
In order to protect and endpoint (for example, to require that only a logged in user
or user with the appropriate security token can access a resource) you need to use
the appropriate milestone hooks available in [epilogue](https://github.com/dchester/epilogue).

I may implement this functionality at a later date.

## Explanation
The `server.js` is a node express server designed to handle RESTful API calls to its endpoints and use [epilogue](https://github.com/dchester/epilogue) with [sequelize](https://github.com/sequelize/sequelize) to handle the database operations for each API call accordingly. The `api.js` provides the API calls to the UI components.

For detailed explanation on how things work in Vue, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## License

This application was built for demonstration purposes only and was never meant to be distributed or used in a production environment. It really should be made private; however, it also demonstrates my capabilities. For this reason, I am leaving it here in public view for now.

Copyright (C) 2018 Kevin Boutin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## About

This project is developed by [Kevin Boutin](http://twitter.com/kevboutin).
