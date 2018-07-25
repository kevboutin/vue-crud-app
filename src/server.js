const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const epilogue = require('epilogue');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// For ease of this tutorial, we are going to use SQLite to limit dependencies
const database = new Sequelize({
    dialect: 'sqlite',
    storage: './test.sqlite'
});

// Define our Post model
// id, createdAt, and updatedAt are added by sequelize automatically
const Post = database.define('posts', {
    subject: Sequelize.STRING,
    body: Sequelize.TEXT
});

// Initialize epilogue
epilogue.initialize({
    app: app,
    sequelize: database
});

// Create the dynamic REST resource for our Post model
const userResource = epilogue.resource({
    model: Post,
    endpoints: ['/posts', '/posts/:id']
});

// Resets the database and launches the express app on :8081
database
    .sync({ force: true })
    .then(() => {
        app.listen(8081, () => {
            console.log('listening to port localhost:8081');
        });
    });
