const { Schema, model } = require('mongoose')


// Schema to create Reaction Model
const reactionSchema = new Schema (
    {

    }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;