// User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const saltRounds = 11;
const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
UserSchema.pre('save', function(next) {
  // Saving reference to this because of changing scopes
  const document = this;
  bcrypt.hash(document.password, saltRounds, function(err, hashedPassword) {
    if (err) {
      next(err);
    } else {
      document.password = hashedPassword;
      next();
    }
  });
});
UserSchema.methods.isCorrectPassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};
mongoose.model('users', UserSchema);
