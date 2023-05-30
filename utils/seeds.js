const connection = require('../config/connection');
const { User, Thought } = require('../models');
const thoughtData = require('./thoughtData');
const userData = require('./userData');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

    // Drop existing Users
    await User.deleteMany({});

    // User.create({userName:"JamieTartt", email: "JamieTartt@gmail.com"})

    // Drop existing Thoughts
    await Thought.deleteMany({});
    console.log(userData)
    try {
        await User.insertMany(userData);
        console.log('User data seeded successfully.');
      } catch (error) {
        console.error('Error seeding user data:', error);
      }
    
    for (const user of userData) {
        await User.create(user);
      }

      for (const user of thoughtData) {
        await Thought.create(thought);
      }  
});