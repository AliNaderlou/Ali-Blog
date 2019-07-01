var express = require('express');
var router = express.Router();
const withAuth = require('../middleware/authMiddleware');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/AliBlog', {
  useNewUrlParser: true,
  useFindAndModify:false,
  useCreateIndex:true
});
require('../models/WorkSample');
require('../models/VisitLog');
require('../models/User');

const workSamples = mongoose.model('workSamples');
const visitLogs = mongoose.model('visitlogs');
const users = mongoose.model('users');

router.get('/get-worksamples/:workSamplesLoadCount', (req, res) => {
  if (req.params.workSamplesLoadCount === 'All') {
    var q = workSamples.find({});
  } else {
    var q = workSamples
      .find({})
      .skip(req.params.workSamplesLoadCount * 3)
      .limit(3);
  }
  q.exec(function(err, workSamples) {
    res.send(workSamples);
  });
});
router.get('/get-worksample/:id', (req, res) => {
  var q = workSamples.findOne({ _id: req.params.id });
  q.exec(function(err, workSample) {
    res.send(workSample);
  });
});
router.get('/submit-ip-address', (req, res) => {
  let visitLog = new visitLogs({
    ip: req.hostname,
    detail: req.useragent,
    date: new Date(),
  });
  visitLog.save();
  res.send({ userIp: req.hostname });
});
router.post('/update-worksample', withAuth, (req, res) => {
  const workSample = req.body;
  workSamples.findOneAndUpdate(
    { _id: workSample._id },
    { ...workSample },
    function(err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send(200);
    },
  );
});

router.post('/create-worksample', withAuth, (req, res) => {
  const workSampleData = req.body;
  const workSample = new workSamples({...workSampleData,date:new Date()});
  workSample.save().then(() => res.send(200));
});

router.post('/remove-worksample', withAuth, (req, res) => {
  const {id} = req.body;
  workSamples.findByIdAndRemove(id, function(err, offer) {
    if (err) {
      throw err;
    }
   res.send(200);
  });
});
module.exports = router;
