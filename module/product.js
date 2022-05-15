const productModel=require('../model/product');

//Create Mentor
exports.createProduct=async(req,res,next)=>{
    const productData=new productModel({...req.body})
        try{
            var response=await productData.save();
            res.send(response);
        }
        catch(e){console.log(e)}
   
}


