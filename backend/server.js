// import modules 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const BlogModel =  require('./models/blogs');


// importing routes 
const indexRouter = require('./routes/index.js');
const postsRouter = require('./routes/posts.js');
// const dbConnection = 


// set routes & can add suffixes 
app.use('/', indexRouter);
app.use('/blogs', postsRouter);


// set port number 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


// middleware 
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// connect to MongoDB 



// run server
app.listen(PORT, () => {
    console.log(`Serving running on port #${PORT}!`);
  });