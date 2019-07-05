var express = require('express')
var router = express.Router()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AliBlog', {
  useNewUrlParser: true,
  useFindAndModify:false,
  useCreateIndex:true
});
const workSamples = mongoose.model('workSamples');
const visitLogs = mongoose.model('visitlogs');
const users = mongoose.model('users');
router.get('/submit-user', (req, res) => {
    // let user = new users({
    //   username:"itsdb",
    //   password:"Dbcoper123321"
    // });
    // user.save();
    res.send('fuck man')
  });
  module.exports = router
