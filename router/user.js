const express=require('express');
const router=express.Router();
const usermodule=require('../module/users');

router.post('/customer',usermodule.createcustomer);

router.post('/room',usermodule.createroom);

router.post('/bookdet',usermodule.createbookeddetials);

router.get('/test',usermodule.list_all_rooms_with_booked_data);

router.get('/test1',usermodule.getcustandbookingdet);

module.exports=router;
