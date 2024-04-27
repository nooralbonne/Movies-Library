'use strict';

const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config()

const cors = require('cors')
const port = process.env.PORT;
const apiKey =  process.env.API_KEY;

const data = require('./Movie Data/data.json');


// const port = 3000;
// app.use(cors())

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



// Favorite Page Endpoint: “/favorite”
app.get('/favorite',favoriteHandler);
function favoriteHandler(req,res){
    res.send("Welcome to Favorite Page")
}

// ======================================LAB 12===============================
// ==========trending============
// http://localhost:3001/trending
app.get('/trending', trendingHandler);
function trendingHandler(req,res){
    //axios.get(url).then().catch()
    let url = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`
    axios.get(url)
    .then(result=>{
        // console.log(result);
        let trendingData = result.data.results.map(data=>{
            return new Trending(data.id,data.title,data.release_date,data.poster_path,data.overview);
        })
        res.json(trendingData)
    })
    .catch(error=>{
        console.log(error)
        res.status(500).send('Internal Server Error');
    })
    }

    function Trending(id,title,release_date, poster_path, overview) {
        this.id = id;
        this.title = title;
        this.release_date = release_date;
        this.poster_path = poster_path;
        this.overview = overview;
    }

// ==========search============
// http://localhost:3001/search?name
app.get('/search', searchMovieHandler);
function searchMovieHandler(req,res){
    let searchMovie = req.query.name;// its up to me what i call it 
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchMovie}`
    axios.get(url)
    .then(result=>{
        // console.log(result.data.results)
        let response = result.data.results
        res.json(response)
    })
    .catch(error=>{
        console.log(error)
        res.status(500).send('Internal Server Error');
    })
}

// ==========TV data============
// http://localhost:3001/TV
app.get('/TV', TVHandler);
function TVHandler(req, res) {

    let url = `https://api.themoviedb.org/3/tv/changes?api_key=${apiKey}&language=en-US&page=1`
    axios.get(url)
        .then(result => {
            let respose = result.data.results;
            res.json(respose)
        })
        .catch(error => {
            console.log(error);
        })

}
// ==========popular ID============
// http://localhost:3001/popularId
app.get('/popularId', popularIdHandler);
function popularIdHandler(req, res) {
    let url = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=1`
    axios.get(url)
        .then(result => {
            let respose = result.data.results.map(x => {
                return new MovieLab12(x.id);
            })
            res.json(respose)
        })
        .catch(error => {
            console.log(error);
        })

}

function MovieLab12(id, title, release_date, poster_path, overview) {
    this.id = id;
    this.title = title;
    this.release_date = release_date;
    this.poster_path = poster_path;
    this.overview = overview;
}
// ========================================================================
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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

