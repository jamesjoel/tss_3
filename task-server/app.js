const express = require("express");
const app = express();
const cors = require("cors");
const root = require("path").join(__dirname, 'build');

app.use(express.json())
app.use(express.urlencoded({ extended : true }));
app.use(cors());

app.use(express.static(root));

app.use(require("./config/routes"));

app.get("*", (req, res)=>{
    res.sendFile('index.html', {root});
})

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("server running with port ", port)
})