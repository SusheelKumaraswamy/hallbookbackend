const express= require('express');
var router=express.Router();
var postModule=require('../module/product');

router.post('/postdetials',postModule.createProduct);

module.exports =router;