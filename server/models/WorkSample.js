const mongoose = require('mongoose');
const { Schema } = mongoose;

const workSampleSchema = new Schema({
  title: String,
  imageSrc: String,
  description: String,
});

mongoose.model('workSamples', workSampleSchema);
