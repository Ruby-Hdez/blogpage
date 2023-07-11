const dotenv = require('dotenv');
dotenv.config();

const dbConnect = {
    url: process.env.BLOG_URI,
}

module.exports = dbConnect;