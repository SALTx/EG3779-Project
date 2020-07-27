const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  displayPicture: {
    type: String,
    default: "default.png",
  },
  cart: {
    type: Array,
    default: [],
  },
});

// module.exports = UserSchema;
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
