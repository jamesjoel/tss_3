require("../config/db");
const mongoose = require("mongoose");

const Image = mongoose.Schema({
    name : String
})

module.exports = mongoose.model("image", Image);