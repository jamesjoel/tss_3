const express = require("express");
const app = express();
app.set("view engine", "ejs"); 
app.use(express.json());
app.use(express.urlencoded({ extended : true }))
app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{
    res.render("home");
})

app.listen(3000, ()=>{
    console.log("server running");
})