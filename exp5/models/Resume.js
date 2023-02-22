require("../config/db");
const mongoose = require("mongoose");
/*
let Resume = mongoose.Schema({
    title : String,
    file : String
})

module.exports = mongoose.model("resume", Resume);
*/

module.exports = mongoose.model("resume", mongoose.Schema({
    title : String,
    name : String
}))