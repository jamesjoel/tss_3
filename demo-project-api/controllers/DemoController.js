const routes = require("express").Router()
const Demo = require("../models/Demo");

routes.get("/", async (req, res)=>{ // fetch all data
    let result = await Demo.find({});
    res.send(result);
})
routes.get("/:id", async (req, res)=>{ // fetch data by id
    let id = req.params.id;
    let result = await Demo.find({_id:id});
    res.send(result[0]);
})
routes.post("/", async (req, res)=>{ // insert a data
    await Demo.create(req.body);
    res.send({ success : true });
})
routes.delete("/:id", async (req, res)=>{ // delete a data by id
    let id = req.params.id;
    await Demo.deleteMany({_id : id});
    res.send({ success : true });

})
routes.put("/:id", async (req, res)=>{
    let id = req.params.id;
    await Demo.updateMany({_id : id}, req.body);
    res.send({ success : true });
})




module.exports = routes;