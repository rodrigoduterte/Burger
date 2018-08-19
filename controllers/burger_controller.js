var burger = require('../models/burger');
var express = require('express');
var router = express.Router();

router.get("/index",(req,res)=>{
    burger.all((data)=>{
        var hbs = {burgers: data};
        res.render("index",hbs);
    });
});
router.post("/index",(req,res)=>{
    burger.create("burger_name","devoured",req.body.name,0,(data)=>{
        res.json({id: data});
    });
});
router.put("/index",(req,res)=>{
    burger.modify("devoured",true,req.body.id,(data)=>{
    });
});

module.exports = router;
