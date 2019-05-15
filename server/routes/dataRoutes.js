const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AliBlog', {
  useNewUrlParser: true,
});
require('../models/WorkSample');
const workSamples = mongoose.model('workSamples');

// const workSample = new workSamples({
//   title: 'A Test Application',
//   imageSrc: 'images/722598.jpg',
//   description:
//     'Nisi magna o amet cillum incididunt ex do  culpa cupidatat tempor officia sit ipsum nulla non.Enim magna',
// });
// workSample.save().then(() => console.log('meow'));
module.exports = (app) => {
  app.get('/', (req, res) => {
    workSamples.find({}, function(err, workSamples) {
      res.send(workSamples);
    });
  });
};
