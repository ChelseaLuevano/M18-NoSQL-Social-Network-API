const { ObjectId } = require('mongoose').Types;

const userData = [
    {
        userName: "TedLasso",
        email: "TedLasso@gmail.com",
        thoughts: [ new ObjectId(1), new ObjectId(2), new ObjectId(3)] ,
        friends: [ new ObjectId(2), new ObjectId(3), new ObjectId(4)],
        friendCount: [3]
    },
    {
        userName: "CoachBeard",
        email: "CoachBeard@gmail.com",
        thoughts: [ new ObjectId(4), new ObjectId(5)] ,
        friends: [ new ObjectId(1), new ObjectId(3)],
        friendCount: [2]
    },
    {
        userName: "RoyKent",
        email: "RoyKent@gmail.com",
        thoughts: [ new ObjectId(6), new ObjectId(7), new ObjectId(8)] ,
        friends: [ new ObjectId(1), new ObjectId(2), new ObjectId(4)],
        friendCount: [3]
    },
    {
        userName: "KeelyJones",
        email: "KeelyJones@gmail.com",
        thoughts: [ new ObjectId(9) , new ObjectId(10)] ,
        friends: [ new ObjectId(1), new ObjectId(2), new ObjectId(3)],
        friendCount: [3]
    },
]

module.exports = userData;