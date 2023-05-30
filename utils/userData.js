const { ObjectId } = require('mongoose').Types;

const userData = [
    {
        userName: "TedLasso",
        email: "TedLasso@gmail.com",
        thoughts: [ ObjectId(1), ObjectId(2), ObjectId(3)] ,
        friends: [ObjectId(2), ObjectId(3), ObjectId(4)],
        friendCount: [3]
    },
    {
        userName: "CoachBeard",
        email: "CoachBeard@gmail.com",
        thoughts: [ ObjectId(4), ObjectId(5)] ,
        friends: [ObjectId(1), ObjectId(3)],
        friendCount: [2]
    },
    {
        userName: "RoyKent",
        email: "RoyKent@gmail.com",
        thoughts: [ ObjectId(6), ObjectId(7), ObjectId(8)] ,
        friends: [ObjectId(1), ObjectId(2), ObjectId(4)],
        friendCount: [3]
    },
    {
        userName: "KeelyJones",
        email: "KeelyJones@gmail.com",
        thoughts: [ ObjectId(9) , ObjectId(10)] ,
        friends: [ObjectId(1), ObjectId(2), ObjectId(3)],
        friendCount: [3]
    },
]

module.exports = userData;