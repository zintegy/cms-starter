const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for a post
const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  body: {
    type: String,
  },
  scheduledTime: {
    type: Date,
  },
 
}, { 
  timeStamps: true
  })

//create model for todo
const Post = mongoose.model('post', PostSchema);

module.exports = Post;
