const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AliBlog', {
  useNewUrlParser: true,
});
require('../models/WorkSample');
const workSamples = mongoose.model('workSamples');

// const workSample = new workSamples({
//   title: 'A Test Application',
//   imageSrc: 'images/The-Last-of-Us-2.jpg',
//   description:
//     'Nisi magna laboris pariatur laborum.Do amet cillum incididunt ex do  culpa cupidatat tempor officia sit ipsum nulla non.Enim magna',
// });
// workSample.save().then(() => console.log('meow'));
module.exports = (app) => {
  app.get('/', (req, res) => {
    workSamples.find({}, function(err, workSamples) {
      res.send(workSamples);
    });
  });
};
