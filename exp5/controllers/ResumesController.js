const route = require("express").Router();
const path = require("path");
const Resume = require("../models/Resume");
route.get("/", (req, res)=>{

    Resume.find({}, (err, result)=>{

        let url = req.originalUrl; // /about
        let obj = {url, title : "TSS - Resume", result};
        res.render("pages/resumes", obj);
    })

})

route.post("/save", (req, res)=>{
    let name = req.files.file.name;
    req.files.file.mv(path.resolve()+"/assets/resumes/"+name, (err)=>{
        let obj = { title : req.body.title, name : name};
        Resume.create(obj, (err)=>{
            res.redirect("/resume");
        })
    })
})
module.exports = route;