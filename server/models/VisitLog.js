const mongoose = require('mongoose');
const { Schema } = mongoose;

const visitLogSchema = new Schema({
  ip: String,
  detail: Object,
  date:Date
});

mongoose.model('visitlogs', visitLogSchema);
