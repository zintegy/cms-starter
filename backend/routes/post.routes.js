const express = require ('express');
const router = express.Router();
const PostController = require('../controllers/post.controllers');

router.route('/posts')
  .get(PostController.search)
  .post(PostController.create);

router.route('/posts/:id')
  .delete(PostController.delete)
  .put(PostController.update);

module.exports = router;
