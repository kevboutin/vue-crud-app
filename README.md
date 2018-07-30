# vue-crud-app

> A Vue.js project designed to showcase a CRUD application.

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
The server.js is a node express server designed to handle RESTful API calls to its endpoints and use epilogue with sequelize to handle the database operations for each API call accordingly. The api.js provides the API calls to the UI components.

For detailed explanation on how things work in Vue, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
