const {
  findAll,
  findSingle,
  addPost,
  updatePost,
  deletePost
} = require('./controllers/postController.js')

Parse.Cloud.define('get-all-posts', findAll)

Parse.Cloud.define('get-single-post', findSingle)

Parse.Cloud.define('add-post', addPost)

Parse.Cloud.define('update-post', updatePost)

Parse.Cloud.define('delete-post', deletePost)
