const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    //columns for our document
    firstName: {
        type: String, // What data type this is expecting
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true, // duplicate emails will throw an error response
    },
    password: {
        type: String,
        require: true,
    },
    passwordCheck: String,
});

// Need to export our model
module.exports = mongoose.model("User", UserSchema);
