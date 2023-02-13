const route = require("express").Router();

route.get("/", (req, res)=>{
    let url = req.originalUrl; // /about
    let obj = {url, title : "TSS - About"};
    
    res.render("pages/about", obj);
})

module.exports = route;