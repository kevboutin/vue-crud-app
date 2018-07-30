[![Build Status](https://travis-ci.org/kevboutin/vue-crud-app.svg?branch=master)](https://travis-ci.org/kevboutin/vue-crud-app) [![Dependency Status](https://david-dm.org/kevboutin/vue-crud-app.svg)](https://david-dm.org/kevboutin/vue-crud-app)

# vue-crud-app

> A Vue.js project designed to showcase a CRUD application. CRUD is an acronym for Create, Update and Delete and is a very wide

## Build Setup

``` bash
# install dependencies
npm install

# run the back-end server on port 8081
node ./src/server

# in a different terminal, serve the UI with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# Debugging should be done by running the server (node), running the UI (npm) and then running a debug configuration (JavaScript debug) all at once.
```

## Explanation
The `server.js` is a node express server designed to handle RESTful API calls to its endpoints and use [epilogue](https://github.com/dchester/epilogue) with [sequelize](https://github.com/sequelize/sequelize) to handle the database operations for each API call accordingly. The `api.js` provides the API calls to the UI components.

For detailed explanation on how things work in Vue, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## License

This application was built for demonstration purposes only and was never meant to be distributed or used in a production environment. It really should be made private; however, it also demonstrates my capabilities. For this reason, I am leaving it here in public view for now.

Use at your own risk should you desire. Attribution is not required, but much appreciated, especially if you are making a product for developers.

## About

This project is developed by [Kevin Boutin](http://twitter.com/kevboutin).
