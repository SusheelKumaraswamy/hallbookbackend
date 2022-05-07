const { ObjectId } = require('mongodb');
const mongo= require('../database');

module.exports.getusers= async (req,res,next)=>{
    try {
        const data  =await mongo.selectedDb.collection('users').find().toArray();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports.createusers=async(req,res,next)=>{
    try {
        const cretaeresponse=await mongo.selectedDb.collection('users').insertOne(req.body);
        res.send(cretaeresponse);
    } catch (error) {
        console.log(error);
    }
}

module.exports.updateusers=async (req,res,next)=>{
    try {
        const updatedresponse=await mongo.selectedDb.collection('users').updateOne(
            {_id: ObjectId(req.params.uid)},
            {$set:{...req.body}}
        )
        res.send(updatedresponse);
    } catch (error) {
        console.log(error);
    }
}