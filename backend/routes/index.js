// landing page destination - host 
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is the endpoint for my blog!")
    // could technically send any kind of message or data 
    // the endpoint is just defined as the "/"  but could be something else 
});

// exports module called router 
module.exports = router; 
