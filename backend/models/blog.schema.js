const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: { type: String, require: true, maxLength: 200, default: "MISSING TITLE" },
    author: { type: String, require: true, default: "UNKNOWN" },
    content: { type: String, require: true, default: "..." }, 
    published_date: { type: Date, default : Date.now },
})

// Sets the published_date parameter equal to the current time
PostSchema.pre('save', (next) => {
    now = new Date();
    if (!this.createdAt) {
      this.createdAt = now;
    }
  
    next();
});

// compile our schemas into models, then export
const BlogModel = mongoose.model("BlogModel", PostSchema);
module.exports = BlogModel;
