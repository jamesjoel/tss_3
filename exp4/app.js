const express = require("express");
const app = express();

// we have to set our template engine 
app.set("view engine", "ejs"); 

// now we have to set our static files folder
app.use(express.static(__dirname+"/assets"));


// let x = express.static(__dirname+"/assets");
// app.use(x);



app.get("/", (req, res)=>{
    res.render("home");
});
app.get("/contact", (req, res)=>{
    res.render("contact");
});
app.get("/help", (req, res)=>{
    res.render("help");
});



app.get("/about", (req, res)=>{
    let name = "The Stepping Stone";
    let info = { name };
    res.render("about", info);
});

app.listen(3000, ()=>{
    console.log("server running");
})