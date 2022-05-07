const mongo= require('../database');

module.exports.getusers= async (req,res,next)=>{
    try {
        const data  =await mongo.selectedDb.collection('users').find().toArray();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}