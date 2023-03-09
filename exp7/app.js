const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb://0.0.0.0:27017/tss4");

let Abc = mongoose.Schema({
    name : String,
    age : Number
})

let AbcModel = mongoose.model("abc", Abc);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.get("/", async (req, res)=>{
    let result = await AbcModel.find({});
    res.send(result);
})

app.post("/", async (req, res)=>{
    // console.log(req.body);
    await AbcModel.create(req.body);
    res.send({success : true});
})

// res.redirect
// res.render
// res.send
// res.sendFile



app.listen(3001, ()=>{
    console.log("server running");
})