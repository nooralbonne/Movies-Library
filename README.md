# Movies-Library -  Version-1

**Author Name**: NOOR ALBONNE

## WRRC
![favoritepageWRRC](images/favoritepageWRRC.png)
![homepageWRRC](images/homepageWRRC.png)

## Overview
This project is a movie app that lets users browse the latest films by category.

## Getting Started
## Project Setup Steps

1. **Draw WRRC (client, server, requst, responce) to Figure Out Your Project**: Visualize the process flow of your project using the WRRC model to understand how data is processed and displayed.

2. **Download Node.js**: Ensure you have Node.js installed. You can download it from [Node.js website](https://nodejs.org/).

3. **Download Express.js**:
   - Initialize a new Node.js project: `npm init -y`.
   - Create an `index.js` file (name is optional).
   - Install Express.js: `npm install express`.
   - Set up your server:
     ```bash
     const express = require("express");
     const app = express();
     app.get("/", (req, res) => {
         // Your route handling code here
     });
     app.listen(8080, () => {
         console.log("Listening to port 8080");
     });
     ```
4. **Run the Server**:
   - Start your server using Node.js: `node index.js`.
   - Alternatively, use Nodemon for automatic server restarts during development: `npm install nodemon`.



## Project Features

- **Browse Movies by Category**: Users can view a list of movies sorted by different genres.
- **Search Functionality**: Users can search for specific movies by title, actor, or keyword.
- **Movie Details**: Users can view detailed information about each movie, such as its synopsis, release date, and cast.
- **User Ratings and Reviews**: Users can rate and review movies, and view ratings and reviews from other users.
- **Watch Trailers**: Users can watch trailers for selected movies.
- **Personalized Recommendations**: Users receive movie recommendations based on their viewing history or preferences.
- **User Authentication**: Users can create accounts, log in, and save favorite movies or personalized preferences.
