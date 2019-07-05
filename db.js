const mongoose = require('mongoose');
let db = mongoose.connect('uwdn3f3vvfzgr6j6xgc4:Aw5dyQWggTrtt2CweSUq@bxjsbneijuv151o-mongodb.services.clever-cloud.com/bxjsbneijuv151o', {
  useNewUrlParser: true,
  useFindAndModify:false,
  useCreateIndex:true
});
module.exports = mongoose;
