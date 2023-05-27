const { Schema, model } = require('mongoose')


// Schema to create Reaction Model
const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280
        },
        userName: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAt) => createdAt.toISOString()
        }
    }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;