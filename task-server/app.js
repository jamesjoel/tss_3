const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json())
app.use(express.urlencoded({ extended : true }));
app.use(cors());

app.use(require("./config/routes"));

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("server running with port ", port)
})