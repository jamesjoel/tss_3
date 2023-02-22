const route = require("express").Router();


route.use("/", require("../controllers/HomeController"));
route.use("/about", require("../controllers/AboutController"));
route.use("/contact", require("../controllers/ContactController"));
route.use("/student", require("../controllers/StudentController"));
route.use("/images", require("../controllers/ImagesController"));
route.use("/resume", require("../controllers/ResumesController"));

module.exports = route;