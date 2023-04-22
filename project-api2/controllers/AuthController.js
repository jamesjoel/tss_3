const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");




routes.post("/", async (req, res)=>{
    let e = req.body.email;
    let p = req.body.password;
    
    let result = await User.find({ email : e });
  
    if(result.length > 0)
    {
        if(result[0].password == sha1(p)) // email and pass both are correct
        {
            
            let obj = { name : result[0].fullname, email : result[0].email, id : result[0]._id };
            let token = jwt.sign(obj, "tss");

            
            res.send({ success : true, token : token });
        }
        else{
            res.send({ success : false, errType : 2});
        }
    }
    else{ // if length is 0 then email id not exists in collection
        res.send({ success : false, errType : 1});
    }

})

module.exports = routes;