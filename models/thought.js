const { Schema, model } = require('mongoose')


// Schema to create Thought Model
const thoughtSchema = new Schema (
    {

    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;