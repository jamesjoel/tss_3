const route = require("express").Router();

route.get("/",(req,res)=>{
    res.render("pages/contact");
});

module.exports = route;