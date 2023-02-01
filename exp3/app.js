const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    // res.send("hello")
    // res.sendFile("hello")
    res.render("home");
})
app.get("/about", (req, res)=>{
    let a = "******amar";
    let b = "mumbai";

    let user = { name : a, city : b, age : 25, color : "#CD704A"};

    res.render("about", user);
})



app.listen(3000, ()=>{
    console.log("server running");
})