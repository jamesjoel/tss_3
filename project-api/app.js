const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("express-fileupload")
const root = require('path').join(__dirname, 'build')


app.use(express.static(__dirname+"/assets"));

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(upload())
app.use(cors());
app.use(express.static(root));
app.use(require("./config/routes"));


app.get("*", (req, res)=>{
    res.sendFile("index.html", {root});
})

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    
    console.log("server running with port ", port);
})


/*
    file upload in node-express

    1. npm i express-fileupload
    2. let upload = require("express-fileupload")
    3. app.use(upload())

    4. req.files


*/