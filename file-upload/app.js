const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("express-fileupload")

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(upload());
app.use(cors());


app.post("/api/upload", (req, res)=>{
    let image = req.files.image;
    image.mv("./assets/files/"+image.name, (err)=>{
        console.log("UPLOAD --------");
    });
})


app.listen(3001, ()=>{
    console.log("server running");
})
