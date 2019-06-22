const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AliBlog', {
  useNewUrlParser: true,
});
require('../models/WorkSample');
require('../models/VisitLog');
require('../models/User');

var useragent = require('express-useragent');

const workSamples = mongoose.model('workSamples');
const visitLogs = mongoose.model('visitlogs');
const users = mongoose.model('users');

// const workSample = new workSamples({
//   title: 'A Test Application 3',
//   medias: [{type:'image',src:'images/1.jpg'},{type:'image',src:'images/The-Last-of-Us-2.jpg'},{type:'image',src:'images/722598.jpg'},{type:'video',src:'videos/1.mp4'}],
//   description:
//     'Dolore do veniam sint et tempor cillum qui dolor velit non elit.Velit sunt sint elit fugiat cillum ea minim non nulla non ad.Quis sint quis id ex anim do sint quis qui cillum.Duis fugiat sint laborum sint consectetur tempor eiusmod fugiat proident sint minim.Voluptate cillum ullamco est ipsum laboris reprehenderit et ut laborum labore ex.Ullamco ut consequat in enim ad voluptate tempor nulla in velit culpa culpa.Ex minim officia laboris sit anim.Incididunt magna sint incididunt sit amet voluptate ex.Pariatur enim culpa deserunt irure nisi duis cupidatat.Duis exercitation ut aliquip exercitation adipisicing.Non incididunt consequat in velit laboris aliqua ullamco veniam tempor laborum aliquip occaecat officia irure.In pariatur minim non anim ad amet adipisicing mollit ipsum esse laboris nostrud pariatur exercitation.Ipsum in quis sunt elit non deserunt reprehenderit commodo reprehenderit.Est aliquip et ipsum reprehenderit esse labore.',
// });
// workSample.save().then(() => console.log('meow'));
module.exports = (app) => {
  app.use(useragent.express());
  app.get('/api/get-worksamples/:workSamplesLoadCount', (req, res) => {
    let q = workSamples.find({}).skip(req.params.workSamplesLoadCount*3).limit(3);
    q.exec(function(err, workSamples) {
     res.send(workSamples);
    });
  });
  app.get('/api/submit-ip-address', (req, res) => {
    let visitLog = new visitLogs({
      ip: req.hostname,
      detail: req.useragent,
      date: new Date(),
    });
    visitLog.save();
    res.send({ userIp: req.hostname });
  });
  app.get('/submituser', (req, res) => {
    let user = new users({
      username:"#itsdb",
      password:"6205014"
    });
    user.save();
    res.send("f");
  });
 
};
