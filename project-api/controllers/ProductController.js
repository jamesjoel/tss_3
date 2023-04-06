const routes = require("express").Router();
const Product = require("../models/Product");
const path = require("path")

routes.get("/",async (req, res)=>{ // get all
    let result = await Product.find({});
    let newresult = result.map(item=>{
        item.image = "http://localhost:3001/product_images/"+item.image;
        return item;
    })
    res.send(newresult);
})
routes.post("/",async (req, res)=>{ // insert
    let image = req.files.image;
    //console.log(path.resolve());
    //return;
    image.mv(path.resolve()+'/assets/product_images/'+image.name, async (err)=>{
        req.body.image = req.files.image.name;
        await Product.create(req.body);
        res.send({success : true });
    })

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