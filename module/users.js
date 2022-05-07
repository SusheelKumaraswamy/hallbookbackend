const { ObjectId } = require('mongodb');
const mongo= require('../database');

module.exports.createcustomer= async (req,res,next)=>{
    try {
        const data1  =await mongo.selectedDb.collection('customer').insertOne(req.body);
        res.send(data1);
    } catch (error) {
        console.log(error);
    }
}

module.exports.createroom=async(req,res,next)=>{
    try {
        const cretaeresponse=await mongo.selectedDb.collection('room').insertOne(req.body);
        res.send(cretaeresponse);
    } catch (error) {
        console.log(error);
    }
}

module.exports.createbookeddetials=async (req,res,next)=>{
    try {
        const updatedresponse=await mongo.selectedDb.collection('bookeddetials').insertOne(req.body)
        res.send(updatedresponse);
    } catch (error) {
        console.log(error);
    }
}

module.exports.list_all_rooms_with_booked_data=async(req,res,next)=>{
    try {
        const data=await mongo.selectedDb.collection('room').aggregate([
            {
                $lookup: {
                    from: "bookeddetials",
                    localField: "roomnum",
                    foreignField: "roomnum",
                    as: "room_number"
                  } 
            }
        ]).toArray();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports.getcustandbookingdet=async(req,res,next)=>{
    try {
        const data=await mongo.selectedDb.collection('customer').aggregate([
            {
                $lookup: {
                    from: "bookeddetials",
                    localField: "cust_id",
                    foreignField: "cust_id",
                    as: "booking_detials-for-customer"
                  }
            }
        ]).toArray();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}