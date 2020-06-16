let CustomerModel = require('./../models/users/customer');

class User {
    constructor(user) {
        this.username = user.username;
        this.password = user.password;
        this.bio = user.bio;
    }
}

module.exports = {
    registerUser: function (user) {
        let username = user.username;
        let email = user.email;
        let password = user.password;
        let phoneNumber = user.phoneNumber;
        let image = user.image;

        const newUser = new CustomerModel({
            username,
            email,
            password,
            phoneNumber,
            image,
        });

        newUser
            .save()
            .then(() => res.json("User added!"))
            .catch((err) => res.status(400).json("Error: " + err));
    },
    login: function () {

    },
}