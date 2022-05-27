const {
  Router
} = require('express');
const {
  commentController
} = require('../controllers/comments.controller.js');

const router = Router();

router.post('/comments', commentController.postComment)
router.get('/comments', commentController.getComments)
router.get('/comments/:id', commentController.getCommentById)
router.patch('/comments/:id', commentController.patchCommentById)
router.delete('/comments/:id', commentController.deleteCommentById)

module.exports = router;