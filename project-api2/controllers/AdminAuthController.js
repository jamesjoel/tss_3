const routes = require("express").Router();
const Admin = require("../models/Admin");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");


routes.post("/",async (req, res)=>{
    let u = req.body.username;
    let p = req.body.password;
    let result = await Admin.find({ username : u });
    if(result.length > 0)
    {
        if(result[0].password == sha1(p))
        {
            let obj = { id : result[0]._id, username : result[0].username };
            let token = jwt.sign(obj, "tss");
            res.send({ success : true, token});
        }
        else{

            res.send({ success : false, errType : 2})
        }
    }
    else{
        res.send({ success : false, errType : 1})
    }
})

module.exports = routes;