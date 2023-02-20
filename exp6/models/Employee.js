require("../config/db");
const mongoose = require("mongoose");

module.exports = mongoose.model("employee", mongoose.Schema({
    name :  String,
    age : Number,
    salary : Number,
    address : String
}))
