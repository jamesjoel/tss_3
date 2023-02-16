const route = require("express").Router();
const City = require("../models/City");
const Student = require("../models/Student");

route.get("/detail", (req, res)=>{
    let id = req.query.id;
    Student.find({ _id : id }, (err, result)=>{
        console.log(result);
        let url = req.originalUrl; // /contact
        let obj = {url, title : "TSS - Student", result : result[0]};
        res.render("pages/detail-student", obj);
    })
})

route.get("/edit", (req, res)=>{
    let id = req.query.id;
    Student.find({_id : id}, (err, user)=>{
        City.find({}, (err, result)=>{
            let url = req.originalUrl; // /contact
            let obj = {url, title : "TSS - Student", result, user : user[0]};
            res.render("pages/edit-student", obj);

        })
    })
    
})
route.get("/removeall", (req, res)=>{
    Student.remove({}, (err)=>{
        res.redirect("/student/view");
    })
})
route.get("/delete", (req, res)=>{
    let a = req.query.id;
    Student.remove({_id : a}, (err)=>{
        res.redirect("/student/view");
    })
})


route.get("/add", (req, res)=>{
    City.find({}, (err, result)=>{
        let url = req.originalUrl; // /contact
        let obj = {url, title : "TSS - Student", result};
        res.render("pages/add-student", obj);

    })
})
route.get("/view", (req, res)=>{
    Student.find({}, (err, result)=>{
        // console.log(result);
        let url = req.originalUrl; // ---- /
        let obj = {url, title : "TSS - View Student", result};
        res.render("pages/view-student", obj);
    });
})
route.post("/save", (req, res)=>{
    Student.create(req.body, (err)=>{
        res.redirect("/student/view");
    });
})

route.post("/update", (req, res)=>{
    let id = req.query.id;
    Student.updateMany({_id : id}, req.body, (err)=>{
        res.redirect("/student/view");
    })
})


module.exports = route;