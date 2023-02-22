
//express constructor
const express= require("express");
const app = express();

 //view engine
app.set ("view engine","ejs");


//static file 
app.use(express.static(__dirname + "/assets"));

//data in node
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//slicing of routes
const routes = require("./config/routes");
app.use(routes);


//server
const port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log("live server running");
})