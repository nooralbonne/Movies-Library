'use strict';

const express = require('express');
const app = express();
const data = require('./Movie Data/data.json');

// Home Page Endpoint: /
app.get('/',spiderHandler);
function spiderHandler(req,res){
    let singleMovie= new Movie(data.title,data.poster_path,data.overview);
    res.send(singleMovie);
}

function Movie(title, poster_path, overview) {
    this.title = title;
    this.poster_path = poster_path;
    this.overview = overview;
}

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Favorite Page Endpoint: “/favorite”
app.get('/favorite',favoriteHandler);
function favoriteHandler(req,res){
    res.send("Welcome to Favorite Page")
}


// Middleware for handling errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 500,
        responseText: "Oops! Something went wrong on our end."
    });
});

// Middleware for handling 404 Not Found errors
app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        responseText: "Sorry, the page you're looking for could not be found."
    });
});
