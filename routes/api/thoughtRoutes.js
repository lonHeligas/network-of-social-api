const router = require('express').Router();

const {
  createThought,
  getAllThoughts,
  getSingleThought,

} = require('../../controllers/thoughtController');

// # api/thoughts
router.route('/').post(createThought).get(getAllThoughts);

// # api/thoughts/:id
router.route('/:thoughtId').get(getSingleThought);

module.exports = router;