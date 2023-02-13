const route = require("express").Router();

route.get("/", (req, res)=>{
    
    let url = req.originalUrl; // /contact
    let obj = {url, title : "TSS - Contact"};
    res.render("pages/contact", obj);
})

module.exports = route;