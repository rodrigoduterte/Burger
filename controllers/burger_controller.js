var burger = require('../models/burger');
var express = require('express');
var router = express.Router();

router.get("/index",(req,res)=>{
    // res.render("index");
    burger.all((data)=>{
        var hbs = {burgers: data};
        console.log(hbs);
        res.render("index",hbs);
    });
});
router.post("/index",(req,res)=>{
    console.log(req.body.name);
    burger.create("burger_name","devoured",req.body.name,0,(data)=>{
        console.log("ddddddddd " + data);
        res.json({id: data});
    });
});
router.put("/index",(req,res)=>{
    burger.modify("devoured",true,req.body.id,(data)=>{
        console.log(req.body.id);
        // res.json({});
    });
});

module.exports = router;