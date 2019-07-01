var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const secret = keys.tokenSecret;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AliBlog', {
  useNewUrlParser: true,
  useFindAndModify:false,
  useCreateIndex:true
});
const User = mongoose.model('users');
router.post('/authenticate', function(req, res) {
  const { username, password } = req.body;
  User.findOne({ username }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'Internal error please try again',
      });
    } else if (!user) {
      res.status(401).send({
        error: 'Incorrect username or password',
      });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500).json({
            error: 'Internal error please try again',
          });
        } else if (!same) {
          res.status(401).json({
            error: 'Incorrect username or password',
          });
        } else {
          // Issue token
          const payload = { username };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h',
          });
          res.cookie('token', token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});
module.exports = router;
