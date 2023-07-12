// import modules 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


// importing routes 
const indexRouter = require('./routes/index.js');
const postsRouter = require('./routes/posts.js');
const dbConnect = require('./database/db_connect.js');

// set port number 
dotenv.config();
const app = express(); 
const PORT = process.env.PORT || 5000;

// set routes & can add suffixes 
app.use('/', indexRouter);
app.use('/blogs', postsRouter);


// middleware 
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// connect to MongoDB 
mongoose.set('strictQuery', true);
mongoose.connect(dbConnect.url)
    .then(()=>{
        console.log("Connected to MongoDB!");
    },
    err=>{
        console.log("Connection failed!");
    }
)


// run server
app.listen(PORT, () => {
    console.log(`Serving running on port #${PORT}!`);
  });