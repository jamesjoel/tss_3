const routes = require("express").Router();
const User = require("../models/User");

routes.get("/", async(req, res)=>{
    console.log("*****************");
    let result = await User.find({});
    res.send(result);
    // User.find({}).then(result=>console.log(result)).catch(err=>{
    //     console.log(err);
    // })
})
routes.get("/:id", async(req, res)=>{
    let result = await User.find({ _id : req.params.id});
    res.send(result);
})
routes.post("/", async(req, res)=>{
    delete req.body._id;
    let result = await User.create(req.body);
    res.send(result);
})
routes.put("/:id", async(req, res)=>{
    let result = await User.updateMany({ _id : req.params.id}, req.body);
    res.send(result);
})
routes.delete("/", async(req, res)=>{
    let result = await User.deleteMany({});
    res.send(result);
})
routes.delete("/:id", async(req, res)=>{
    let result = await User.deleteMany({ _id : req.params.id});
    res.send(result);
})

// localhost:3001/api/user/city/indore  (delete)

routes.delete("/city/:city", async(req, res)=>{
    let result = await User.deleteMany({ city : req.params.city});
    res.send(result);
})

// localhost:3001/api/user/gender/male  (get)
routes.get("/gender/:gender", async(req, res)=>{
    let result = await User.find({ gender : req.params.gender});
    res.send(result);
})

routes.put("/city/:city", async (req, res)=>{
    let result = await User.updateMany({ city : req.params.city}, req.body);
    res.send(result);
})

module.exports = routes;