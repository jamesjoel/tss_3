const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", async(req, res)=>{
    let e = req.body.email;
    let p = sha1(req.body.password);

    let result = await User.find({ email : e });
    if(result.length > 0)
    {   
        if(result[0].password == p)
        {   
            let userobj = { id : result[0]._id, name : result[0].name };
            let token = jwt.sign(userobj, "any string");
            res.status(200).json({ token });
        }else{

            res.status(401).json({ type : 2 });
        }
    }else{
        res.status(401).json({ type : 1 });
    }
})

module.exports = routes;