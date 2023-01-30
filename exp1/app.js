let express = require("express");
let app = express();

app.get("/", function(req, res){
    res.send("<h1>home page</h1>");
})
app.get("/about", function(req, res){
    
    res.send("<h1>about page</h1>");
})
app.get("/contact", function(req, res){
    
    res.send("<h1>contact page</h1>");
})

app.listen(3000);

