// functions for creating & displaying posts

// retrieve & display posts 
const blog_list_get = (req, res) => {
    BlogModel.find({}, (err, blogs) =>{
      if(err) {
          res.status(500).send({
              status: 500,
              msg: 'No Blogs Available.'
          });
      }
      res.status(200).send(blogs)
  })
};


// create a blog on POST 
const blog_create_post = (req, res) => {
    const incomingData = req.body;
    const newBlog = new BlogModel(incomingData);

    newBlog.save((err, doc) => {
        if (err) {
            res.status(500).send({
                err: err,
                message: 'Error! Sorry, but your blog could not be created.'
            });
        };

        res.status(200).send({
            message: 'Blog successfully created!',
            document: doc
        });
    });
};

// delete posts 
const blog_delete_post = (req, res, next) => {
    Post.deleteOne({ _id: req.params.id, creator: req.userData.userId }).then(
      result => {
        console.log(result);
        if (result.n > 0) {
          res.status(200).json({ message: "Deletion successful!" });
        } else {
            return res.status(401).json({ message: "Not authorized!" });
        }
      }
    );
  };



module.exports = { blog_list_get ,blog_create_post, blog_delete_post};