const mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost:27017/AliBlog', {
  useNewUrlParser: true,
  useFindAndModify:false,
  useCreateIndex:true
});
module.exports = mongoose;
