const dotenv = require('dotenv');
dotenv.config();

const dbConnect = {
    url: process.env.MONGO_DB_URI,
}

module.exports = dbConnect;