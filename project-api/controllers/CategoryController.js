const routes = require("express").Router();
const Category = require("../models/Category");

routes.post("/", async (req, res)=>{
    await Category.create(req.body);
    res.send({ success : true });
})
routes.get("/", async (req, res)=>{ // all data
    let result =await Category.find({});
    res.send(result);
})
routes.get("/:id", async (req, res)=>{ // all single data
    let id = req.params.id;
    let result =await Category.find({_id : id});
    res.send(result[0]);
})
routes.put("/:id", async (req, res)=>{ // all single data
    let id = req.params.id;

    console.log(id);
    console.log(req.body);

    await Category.updateMany({_id : id}, req.body);
    res.send({ success : true });
})

routes.delete("/", async (req, res)=>{
    let id = req.query.id;
    await Category.deleteMany({ _id : id });
    res.send({ success : true });
})



module.exports = routes;