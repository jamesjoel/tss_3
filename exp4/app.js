const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss4")

const TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number,
    class : String,
    city : String,
    address : String
})

const TeacherModel = mongoose.model("teacher", TeacherSchema);

// we have to set our template engine 
app.set("view engine", "ejs"); 

app.use(express.json());
app.use(express.urlencoded({ extended : true }))
// now we have to set our static files folder
app.use(express.static(__dirname+"/assets"));


// let x = express.static(__dirname+"/assets");
// app.use(x);



app.get("/", (req, res)=>{
    res.render("home");
});










app.get("/teacher", (req, res)=>{
    res.render("teacher");
});

app.post("/add", (req, res)=>{
    TeacherModel.create(req.body, (err)=>{
        if(err){
            console.log(err);
            return;
        }

        res.redirect("/");
    });
})















app.get("/contact", (req, res)=>{
    res.render("contact");
});
app.get("/product", (req, res)=>{

    let data = ["Mobiles", "Home Appliance", "Fashion Men", "Fashion Women", "Kids"];

    let product = [
        {
            title : "I-Phone",
            price : 54000.00,
            img : "2.jpg"
        },
        {
            title : "Samsung",
            price : 27000.00,
            img : "3.jpg"
        },
        {
            title : "HTC",
            price : 24500.00,
            img : "4.jpg"
        },
        {
            title : "Mi",
            price : 31000.00,
            img : "5.jpg"
        },
        {
            title : "Vivo",
            price : 18500.00,
            img : "6.jpg"
        }

        
    ]

    let obj = {product, data};


    res.render("product", obj);
});


app.get("/student", (req, res)=>{
    let color = ["red", "green", "blue", "yellow", "pink"];
    let user = [
        {
            name : "rohit",
            age : 25,
            city : "inodre",
            fee : 5000
        },
        {
            name : "jaya",
            age : 21,
            city : "mumbai",
            fee : 5500
        },
        {
            name : "amar",
            age : 27,
            city : "inodre",
            fee : 7000
        },
        
        {
            name : "gaurav",
            age : 24,
            city : "pune",
            fee : 8000
        },
        {
            name : "nidhi",
            age : 20,
            city : "pune",
            fee : 4500
        }
    ]
    let obj = {color, user};
    res.render("student", obj);
});


app.get("/help", (req, res)=>{
    let obj = {age : 33, city1 : "indore", city2 : "mumbai"}
    res.render("help", obj);
});



app.get("/about", (req, res)=>{
    let name = "The Stepping Stone";
    let info = { name };
    res.render("about", info);
});

app.listen(3000, ()=>{
    console.log("server running");
})