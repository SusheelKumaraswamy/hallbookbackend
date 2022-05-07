const express=require('express');
const router=express.Router();
const usermodule=require('../module/users');

router.get('/get',usermodule.getusers);