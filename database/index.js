const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/mvp';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

module.exports = db;