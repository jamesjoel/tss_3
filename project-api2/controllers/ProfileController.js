const routes = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");


routes.get("/", async (req, res)=>{
    let x = req.query.token;
    let obj = jwt.decode(x, "tss");
    let result = await User.find({_id : obj.id})
    res.send(result[0]);
})

module.exports = routes;