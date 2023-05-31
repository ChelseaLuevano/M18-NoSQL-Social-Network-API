const { ObjectId } = require('mongoose').Types;


const thoughtData = [
    {
        thoughtText: "There's two buttons I never like to hit: that's panic and snooze.",
        userName:"TedLasso",
        reactions: [
            {
                reactionId: new ObjectId(1),
                reactionBody: "Well said!",
                userName: "CoachBeard",
            }
        ],
        reactionCount: 1
    },
    {
        thoughtText: "Believe",
        userName: "TedLasso",
        reactions: [
            {
                reactionId: new ObjectId(2),
                reactionBody: "Let's Believe Guys!",
                userName: "KeelyJones",
            }
        ],
        reactionCount: 1
    },
    {
        thoughtText: "If God would have wanted games to end in a tie, she wouldn't have invented numbers.",
        userName: "TedLasso",
        reactions: [],
        reactionCount: 0
    },
    {
        thoughtText: "I’ve been to Vegas many times. One night is good, two nights is perfect, three is too many.",
        userName: "CoachBeard",
        reactions: [],
        reactionCount: 0
    },
    {
        thoughtText: "We just had a five-hour bus ride where you didn’t talk a lick, and that’s a record by about five hours.",
        userName: "CoachBeard",
        reactions: [],
        reactionCount: 0
    },
    {
        thoughtText: "You deserve someone who makes you feel like you've been struck by f***ing lightning— Don't you dare settle for fine!",
        userName: "RoyKent",
        reactions: [
            {
                reactionId: new ObjectId(3),
                reactionBody: "Roy, you are such a sweetheart!",
                userName: "KeelyJones",
            }
        ],
        reactionCount: 1
    },
    {
        thoughtText: "They better not have used any pictures of me smiling.",
        userName: "RoyKent",
        reactions: [],
        reactionCount: 0
    },
    {
        thoughtText: "I do yoga with a group of women in their sixties. They've no idea who I am. It's twice a week, and it's really good for my core.",
        userName: "RoyKent",
        reactions: [],
        reactionCount: 0
    },
    {
        thoughtText: "That Rebecca is an intimidating, very tall woman. I mean, the minute she locked eyes with me, I started sweating.",
        userName: "KeelyJones",
        reactions: [],
        reactionCount: 0
    },
    {
        thoughtText: "I never know how to react when a grown man beatboxes in front of me.",
        userName: "KeelyJones",
        reactions: [],
        reactionCount: 0
    },
]

module.exports = thoughtData;