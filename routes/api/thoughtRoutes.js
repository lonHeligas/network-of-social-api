const router = require('express').Router();

const {
  createThought,
  getAllThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,  
} = require('../../controllers/thoughtController');

// # api/thoughts
router.route('/').post(createThought).get(getAllThoughts);

// # api/thoughts/:id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// # api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').put(addReaction);

module.exports = router;