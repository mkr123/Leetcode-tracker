const mongoose = require('mongoose');
const db = require('./index');
mongoose.Promise = global.Promise;

const mvpSchema = new mongoose.Schema({
  leetcodeID:Number,
  Title:String,
  Acceptance:String,
  Difficulty:String,
  solvedTime:String,
  status:Number,
  favourite:Boolean
}
);

const Problem = mongoose.model('Problem', mvpSchema);

module.exports = Problem;