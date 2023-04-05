const routes = require("express").Router();
const Product = require("../models/Product");

routes.get("/",async (req, res)=>{ // get all
    let result = await Product.find({});
    res.send(result);
})
routes.post("/",async (req, res)=>{ // insert
    await Product.create(req.body);
    res.send({success : true });
})
routes.get("/:id",async (req, res)=>{ // get one
    var id = req.params.id;
    let result =await Product.find({_id : id});
    res.send(result[0]);
})
routes.delete("/:id",async (req, res)=>{ // delete
    var id = req.params.id;
    await Product.deleteMany({_id : id});
    res.send({success : true });
})
routes.put("/:id",async (req, res)=>{ // update
    var id = req.params.id;
    await Product.updateMany({_id : id }, req.body);
    res.send({success : true });
})



module.exports = routes;