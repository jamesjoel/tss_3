const routes = require("express").Router();


routes.use("/api/category", require("../controllers/CategoryController"));
routes.use("/api/product", require("../controllers/ProductController"));
routes.use("/api/user", require("../controllers/UserController"));
routes.use("/api/auth", require("../controllers/AuthController"));
routes.use("/api/profile", require("../controllers/ProfileController"));
routes.use("/api/admin/auth", require("../controllers/AdminAuthController"));


module.exports = routes;