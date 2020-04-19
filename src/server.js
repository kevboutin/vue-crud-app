const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const epilogue = require('finale-rest');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Using SQLite to limit dependencies.
const database = new Sequelize({
    dialect: 'sqlite',
    storage: './test.sqlite'
});

// Define our Post model.
// The id, createdAt, and updatedAt column values are added by sequelize automatically.
const Post = database.define('posts', {
    subject: Sequelize.STRING,
    body: Sequelize.TEXT
});

// Initialize epilogue for express and sequelize.
epilogue.initialize({
    app: app,
    sequelize: database
});

// Create the dynamic REST resource for our Post model.
epilogue.resource({
    model: Post,
    endpoints: ['/posts', '/posts/:id']
});

// Resets the database and launches the express app on :8081
database
    .sync({force: true})
    .then(() => {
        app.listen(8081, () => {
            console.log('Listening at localhost:8081');
        });
    });
