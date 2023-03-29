const routes = require("express").Router()
const Demo = require("../models/Demo");

routes.get("/", async (req, res)=>{
    let result = await Demo.find({});
    res.send(result);
})
routes.post("/", async (req, res)=>{
    await Demo.create(req.body);
    res.send({ success : true });
})
routes.delete("/", async (req, res)=>{
    let id = req.query.id;
    await Demo.deleteMany({_id : id});
    res.send({ success : true });

})
routes.put("/", (req, res)=>{

})

module.exports = routes;