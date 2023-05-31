const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addThoughtReaction,
    removeThoughtReaction,
} = require('../../controllers/thoughtController')

// /api/thoughts
router.route('/').get(getThoughts).post(createThought)

// /api/thoughts_id
router
    .route('/thoughts_id')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions/:reactionId    
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction).post(addThoughtReaction);;

module.exports = router;
