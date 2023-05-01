const routes = require("express").Router();
const User = require("../models/User");

const jwt = require("jsonwebtoken");

routes.get("/:token", async(req, res)=>{
    let token = req.params.token;
    let obj = jwt.decode(token, "any string");
    if(obj){
        let result = User.find({ _id : obj.id });

        res.status(200).json(result);


    }else{
        res.status(401).json({ err : "unauthoried user"});
    }
    
})

module.exports = routes;