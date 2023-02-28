require("../config/db");
const mongoose = require("mongoose");



module.exports = mongoose.model("registration",mongoose.Schema({
                                                  name : String,
                                                  age : Number,
                                                  address : String,
                                                  city : String,
                                                }));