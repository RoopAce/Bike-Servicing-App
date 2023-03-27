const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/,
    },
    phoneNumber: {
      type: String,
      required: true,
      match: /^\d{10}$/, // assuming you want 10 digit phone numbers
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // assuming you want at least 8 character passwords
    },
    userType: {
        type: String,
        enum: ['vendor', 'user']
      },
  });

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;