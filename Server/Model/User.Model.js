const mongoose = require("mongoose");
userschema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    accountBal:{type: Number, default: 0},
    emailInfo: {
        email: { type: String, unique: true },
    },
    accountNo: { type: Number, unique: true },
    phone: { type: Number, unique: true },
    password: { type: String },
    profile_url: { type: String , default: "unset"}
})
const userModel = mongoose.model("user", userschema);

module.exports = userModel;