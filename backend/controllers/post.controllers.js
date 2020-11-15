const Post = require('../models/post.models');

const PostController = {};

PostController.search = (req, res, next) => {
  Post.find(req.query)
    .then(data => res.json(data))
    .catch(next);
}

PostController.create = (req, res, next) => {
  Post.create(req.body) 
    .then(data => res.json(data))
    .catch(next);
}

PostController.delete = (req, res, next) => {
  Post.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next);
}

PostController.update = (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, req.body) 
    .then(data => res.json(data))
    .catch(data => res.json({"error": "something went wrong"}))
}

module.exports = PostController;



