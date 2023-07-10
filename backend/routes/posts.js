// this router will contain posts router 
const express = require('express');
const router  = express.Router();
const blog_functions = require('../controllers/blog.functions.js');

// GET request for listing all blogpost
router.get('/', blog_functions.blog_list_get);

// GET to access for POST to send request to create blog
router.post('/post', blog_functions.blog_create_post);

module.exports = router;