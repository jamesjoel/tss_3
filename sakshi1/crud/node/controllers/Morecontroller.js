const route = require("express").Router();
const registration = require("../models/registrationmodel")

route.get("/policy",(req,res)=>{
    res.render("pages/policy");
})

route.get("/registration",(req,res)=>{
    res.render("pages/registration");
})

route.get("/record",(req,res)=>{
  registration.find({},(err,result)=>{
  let obj ={result};
  res.render("pages/record",obj);

  })
})

route.get("/delete",(req,res)=>{
  let id = req.query.id;
  registration.remove({_id :id},(err)=>{
    res.redirect("/more/record");

  })
 
})







route.post("/save",(req,res)=>{
  registration.create(req.body,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    res.redirect("/more/record");
  })
})

module.exports = route;