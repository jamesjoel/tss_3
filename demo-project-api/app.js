const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());

app.use("/api/demo", require("./controllers/DemoController"));

app.listen(3001, ()=>{
    console.log("Server running");
})