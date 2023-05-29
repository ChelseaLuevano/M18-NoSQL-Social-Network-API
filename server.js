const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Require model
// this needs to be updated with whatever the model name of object (file) is
// const { Item } = require('./models');

const cwd = process.cwd();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
// const activity = cwd.includes('01-Activities')
//   ? cwd.split('/01-Activities/')[1]
//   : cwd;

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});