const routes = require("express").Router();


routes.use("/api/user/auth", require("../controllers/AuthController"));
routes.use("/api/user/profile", require("../controllers/ProfileController"));


module.exports = routes;