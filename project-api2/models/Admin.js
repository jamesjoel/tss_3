require("../config/db");
const mongoose = require("mongoose");

const Admin = mongoose.Schema({
    username : String,
    password : String
})

module.exports = mongoose.model("admin", Admin);