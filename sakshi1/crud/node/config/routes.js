const route = require("express").Router();
 
route.use("/", require("../controllers/Homecontroller"));
route.use("/about", require("../controllers/Aboutcontroller"));
route.use("/contact", require("../controllers/Contactcontroller"));
route.use("/more", require("../controllers/Morecontroller"));


module.exports = route;