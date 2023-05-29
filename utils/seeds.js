const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
})


// Drop existing Users
// await User.deleteMany({});

User.create({userName:"JamieTartt", email: "JamieTartt@gmail.com"})

// Drop existing Thoughts
// await Thought.deleteMany({});

// const userData = [];