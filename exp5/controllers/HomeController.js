const route = require("express").Router();

route.get("/", (req, res)=>{

    let url = req.originalUrl; // ---- /
    let obj = {url, title : "TSS - HOME"};
    res.render("pages/home", obj);
})
module.exports = route;