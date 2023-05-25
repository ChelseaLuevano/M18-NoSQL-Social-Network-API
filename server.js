const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Require model
// this needs to be updated with whatever the model name of object (file) is
// const { Item } = require('./models');

// const cwd = process.cwd();

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