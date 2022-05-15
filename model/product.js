const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const productschema=new Schema({
    productName:{
        type:String, 
        minlength:5,
        maxlength:25,
        required:true,
        enum:['Laptop','Mobile','Tablet']
    },
    quantity:{
            type:Number,
            required:true
        },
    price:{
            type:Number,
            required:true
        },
    description:{
        type:String,
        minlength:5,
        maxlength:250,
        required:false
    },
    userQuantity:{
        type:Number,
        required:true
    }
});

const Product=mongoose.model('Product',productschema);

module.exports=Product;



