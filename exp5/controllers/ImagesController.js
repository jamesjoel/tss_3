const route = require("express").Router();
const path = require("path");
const Image = require("../models/Image");

route.get("/", (req, res)=>{
    
    Image.find({}, (err, result)=>{

        let url = req.originalUrl; // /about
        let obj = {url, title : "TSS - Image", result};
        res.render('pages/images', obj);
    })

})

route.post("/save", (req, res)=>{
    // console.log(req.files.photo.name, req.files.photo.size);
    let name = req.files.photo.name;
    // req.files.photo.mv(path, err callback);
    
    
    // E:/tss4/exp5/assets/user-images


    req.files.photo.mv("/assets/user-image/"+name, (err)=>{
        
        Image.create({ name : name }, (err)=>{
            res.redirect("/images");
        })
    });
    
})
module.exports = route;