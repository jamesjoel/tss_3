const route = require("express").Router();
const City = require("../models/City");
const Student = require("../models/Student");

route.get("/add", (req, res)=>{
    City.find({}, (err, result)=>{
        let url = req.url; // /contact
        let obj = {url, title : "TSS - Student", result};
        res.render("pages/add-student", obj);

    })
})
route.get("/view", (req, res)=>{
    Student.find({}, (err, result)=>{
        // console.log(result);
        let url = req.url; // ---- /
        let obj = {url, title : "TSS - View Student", result};
        res.render("pages/view-student", obj);
    });
})
route.post("/save", (req, res)=>{
    Student.create(req.body, (err)=>{
        res.redirect("/student/view");
    });
})



module.exports = route;