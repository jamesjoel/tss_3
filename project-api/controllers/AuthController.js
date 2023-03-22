const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");

routes.post("/", async (req, res)=>{
    let e = req.body.email;
    let p = req.body.password;
    console.log(sha1(p));
    let result = await User.find({ email : e });
    
    if(result.length > 0)
    {
        if(result[0].password == sha1(p))
        {
            res.send({ success : true});

        }else{
            res.send({ success : false, errType : 2});

        }
    }
    else{
        res.send({ success : false, errType : 1});
    }

})

module.exports = routes;