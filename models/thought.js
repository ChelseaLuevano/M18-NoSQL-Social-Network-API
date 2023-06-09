const { Schema, model } = require('mongoose')
const reactionSchema = require('./reactionSchema')

let currentTimeStamp = Date.now()

// Schema to create Thought Model
const thoughtSchema = new Schema (
    {
       thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAt) => createdAt.toISOString()
        },
        userName: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// thoughtSchema.virtual('userCount', {
//     ref: 'user',
//     localField: 'user',
//     foreignField: '_id',
//     justOne: true,
//     autopopulate: true,
//     options: { select: 'userName' }
//   });

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;