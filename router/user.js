const express=require('express');
const router=express.Router();
const usermodule=require('../module/users');

router.get('/get',usermodule.getusers);

router.post('/create',usermodule.createusers);

router.put('/update/:uid',usermodule.updateusers);

module.exports=router;
