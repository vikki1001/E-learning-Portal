const mongoose = require("mongoose");
// const { MongoClient } = require('mongodb');

mongoose.connect('mongodb://0.0.0.0:27017/onlineclasses')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB: ' + error);
  });