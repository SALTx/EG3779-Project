// let CustomerModel = require('./../models/users/customer');
// let ShopOwnerModel = require('./../models/users/shopowner');
let UserModel = require("./../models/users/user");

class User {
  constructor(user) {
    this.username = user.username;
    this.password = user.password;
    this.bio = user.bio;
  }
}

function validateRegister(user) {}

module.exports = {
  registerUser: function (user) {
    if (validateRegister(user)) {
      return false;
    }
    let username = user.username;
    let email = user.email;
    let password = user.password;
    let phoneNumber = user.phoneNumber;
    let image = user.image;

    const newUser = new UserModel({
      username,
      email,
      password,
      phoneNumber,
      image,
    });

    newUser.save({}, function (e) {
      console.log(e);
    });
  },
  login: function (username, password) {
    //TODO confirm password but idk why not work
    return UserModel.find({
      username: username,
      password: password,
    }).limit(1);
  },
  addtoCart: function (item) {},
  submitFeedback: function (comments) {},
  getUserData: function (username) {
    return UserModel.find({
      username: username,
    }).limit(1);
  },
};
