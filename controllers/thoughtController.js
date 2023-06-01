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
    getSingleThought(req,res) {
        Thought.findOne({_id: req.params.thoughtId})
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
    deleteThought (req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                ? res.status(404).json({ message: 'No thought with this id' })
                : Thought.findOneAndUpdate (
                    { thoughts: req.params.thoughtId },
                    { $pull: { thoughts: req.params.thoughtId}},
                    { new: true }
                )
            )        
            .then((thought) => 
                !thought
                    ? res
                        .status(404).json({message: "I am not sure what to put here"})
                    : res.json({ message: 'Thought successfully deleted '})
            ) 
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });       
    },
    // Add a reaction to a thought
    addThoughtReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body }},
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
    },
    // Remove a reaction 
    removeThoughtReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: {reactionId: req.params.reactionId} }},
            { runValidators: true, new: true }
        )
        .then((thought) => 
                !thought
                ? res.status(404).json({ message: 'No thoughts with this id!'})
                : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    }
};