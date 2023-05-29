const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


module.exports = {
    // Get all thoughts
    getThoughts(req,res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))
    },
    // Get a single thought
    getSingleThought(res,res) {
        Thought.findOne({_id: req.params.userId})
        .select('-__v')
        .then((thought) => 
            !thought 
                ? res.status(404).json({message: 'No thought with that ID'})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },  
    // Create a new thought
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    // Update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidations: true, new: true }
        )
            .then((thought) => 
                !thought
                    ? res.status(404).json({ message: 'No thought with this id'})
                    : res.json(thought)
            ) 
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });       
    },
    // Delete a thought and remove their reactions

    // Add a reaction to a thought
    addThoughtReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { responses.req.body }},
            { runValidators: true, new: true }
        )
            .then((thought) => 
                !thought
                ? res.status(404).json({ message: 'No thought with this id!'})
                : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    }
    // Remove a reaction from a thought
}