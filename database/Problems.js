const mongoose = require('mongoose');
const db = require('./index');
mongoose.Promise = global.Promise;

const mvpSchema = new mongoose.Schema({
  id:Number,
  leetcodeID:Number,
  title:String,
  acceptance:String,
  difficulty:String,
  solved:Boolean,

}
);

const Problem = mongoose.model('Problem', mvpSchema);

module.exports = Problem;