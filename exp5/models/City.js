require("../config/db");
const mongoose = require("mongoose");

const City = mongoose.Schema({
    name : String,
    state : String,
    id : String
}, {collection : "city"})

const CityModel = mongoose.model("city", City);

module.exports = CityModel;