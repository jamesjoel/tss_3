const route = require("express").Router();

route.use("/", require("../controllers/HomeController"));
route.use("/about", require("../controllers/AboutController"));
route.use("/employee", require("../controllers/EmployeeController"));

module.exports = route;