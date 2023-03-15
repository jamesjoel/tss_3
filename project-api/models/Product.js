require("../config/db");
let mongoose = require("mongoose");

let Product = mongoose.Schema({
    title : String,
    price : Number,
    image : String,
    category : String,
    detail : String,
    discount : Number
})

module.exports = mongoose.model("product", Product);