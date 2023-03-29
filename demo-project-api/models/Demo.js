const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss4_new");

const Demo = mongoose.Schema({
    name : String,
    age : Number
})

module.exports = mongoose.model("demo", Demo);