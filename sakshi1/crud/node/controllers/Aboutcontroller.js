const route = require("express").Router();

route.get("/",(req,res)=>{
    res.render("pages/about");
});

module.exports = route;