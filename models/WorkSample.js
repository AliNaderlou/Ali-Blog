const mongoose = require('mongoose');
const { Schema } = mongoose;

const workSampleSchema = new Schema({
  title: String,
  medias: Array,
  description: String,
  date:Date

});

mongoose.model('workSamples', workSampleSchema);
