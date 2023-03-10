const route = require("express").Router();
const Employee = require("../models/Employee");



route.get("/", (req, res)=>{
    Employee.find({}, (err, result)=>{
        let obj = {result};
        res.render("pages/employee", obj);
    })
})




route.get("/add", (req, res)=>{
    let result = { _id : "", name : "", age : "", salary : "", address :  "" };
    let obj = {result};
    res.render("pages/add-employee", obj);
})
route.get("/edit", (req, res)=>{
    let id = req.query.id;
    Employee.find({_id : id }, (err, result)=>{
        let obj = {result : result[0]};
        res.render("pages/add-employee", obj);
    })
})










route.post("/save", (req, res)=>{



    Employee.create(req.body, (err)=>{
        res.redirect("/employee");
    })

    Employee.create(req.body);
    res.redirect("/employee");



})
route.get("/delete", (req, res)=>{
    let id = req.query.id;
    Employee.remove({ _id : id }, (err)=>{
        res.redirect("/employee");
    })
})



route.post("/update", (req, res)=>{
    const id = req.query.id;
    
    Employee.updateMany({ _id : id }, req.body, (err)=>{
        res.redirect("/employee");
    });
})

/*
app.listen(3000, ()=>{
    console.log("server running")
})


app.listen(3000)
console.log("server running");


*/



module.exports = route;