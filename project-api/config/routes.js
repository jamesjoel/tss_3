const routes = require("express").Router();


routes.use("/api/category", require("../controllers/CategoryController"));


module.exports = routes;