const express = require("express");
// we are calling express constructor
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{

    let url = req.url; // ---- /
    let obj = {url, title : "TSS - HOME"};
    res.render("pages/home", obj);
})
app.get("/about", (req, res)=>{
    let url = req.url; // /about
    let obj = {url, title : "TSS - About"};
    
    res.render("pages/about", obj);
})
app.get("/contact", (req, res)=>{
    let url = req.url; // /contact
    let obj = {url, title : "TSS - Contact"};
    res.render("pages/contact", obj);
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})
