const routes = require("express").Router();
const Category = require("../models/Category");

routes.post("/", async (req, res)=>{
    await Category.create(req.body);
    res.send({ success : true });
})
routes.get("/", async (req, res)=>{
    let result =await Category.find({});
    res.send(result);
})

routes.delete("/", async (req, res)=>{
    let id = req.query.id;
    await Category.deleteMany({ _id : id });
    res.send({ success : true });
})

module.exports = routes;