const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
        .then((user) => res.json(user))
        .catch((err) => {
            res.status(500).json(err)
            console.log(err)
        });
    },
    // Get a single user
    getSingleUser(req,res) {
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .then((user) => 
            !user 
                ? res.status(404).json({message: 'No user with that ID'})
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },           
    // Create a new user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((user) => res.status(500).json(err))
    },
    // Add a friend to a user's friend list
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId} },
            { new: true }
        )
        .then((user) => 
            !user
                ? res.status(404).json({message: "No user with this id"})
                : res.json(user)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
         });
    },
    // Update a user
    updateUser(req, res) {
        User.findOneAndUpdate (
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({message: "No user with this id"})
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Remove a friend from a user's friend list
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId }},
            { new: true}
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
        })
    },
    // Delete a user and associated thoughts
    deleteUser(req, res) {
        User.findOneAndRemove ({ _id: req.params.userId })
            .then((user) =>
            !user
                ? res.status(404).json ({message: "No user with this id"})
                : Thought.findOneAndUpdate(
                    { users: req.params.userId },
                    { $pull: { users: req.params.userId }},
                    { new: true}
                )
        )
        .then((thought) => 
            !thought
                ? res.status(404).json ({message: "Thought created but no user with this id"})
                : res.json({ message: 'Thought successfully deleted '})
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    }
}