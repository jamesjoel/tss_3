const express = require("express");
// we are calling express constructor
const app = express();
const upload = require("express-fileupload");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));



app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(upload());
app.use(require("./config/routes"));




const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})







/*
    1. what is node js
    2. javascript 
    3. variables in JS, how to create, diff const and var/let
    4. what is data-type, tell me some data-types
    5. premitive, refrence type
    6. what is array
    7. what is object
    8. what is JSON 
    9. what is function., types of fn, 
    10. what is module in node
    11. what in npm
    12. what is package.json
    13. what is Express
    14. routing in express
    15. what is view engine, name, why.
    




    I   --- app.use("/about", (req, res)=>{

            })

    II ---      app.use(["/about", "/contact"], (req, res)=>{

                })

    III ---   app.use((req, res)=>{

                })
*/