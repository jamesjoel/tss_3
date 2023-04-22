require("../config/db");

const mongoose = require("mongoose");

const User = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    address : String,
    city : String,
    gender : String,
    contact : String
})

module.exports = mongoose.model("user", User);