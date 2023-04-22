require("../config/db");
let mongoose = require("mongoose");

let Product = mongoose.Schema({
    title : String,
    price : Number,
    image : String,
    category : String,
    detail : String,
    discount : Number,
    image : String
})

module.exports = mongoose.model("product", Product);