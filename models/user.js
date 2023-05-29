const { Schema, model } = require('mongoose')

// Schema to create User Model
const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectID,
                ref: 'thought'

            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectID,
                ref: 'user'
            },
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);


userSchema.virtual('friendCount').get(function(){
    return this.friends.length
});

const User = model('user', userSchema);

module.exports = User;