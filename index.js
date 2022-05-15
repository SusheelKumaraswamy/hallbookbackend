const express = require('express');
const mongo =require('./database');
const employeeRouter=require('./router/user');
const dotenv =require('dotenv');
const productRouter=require('./router/product');
const port =process.env.PORT || 3000

const app=express();
dotenv.config();

app.listen(port,function(){
        console.log("Server Started successfully");
})

app.use(express.json());
mongo.connect();


app.use('/hallbooking',employeeRouter);

app.use('/product',productRouter);

app.use('/',(req,res,next)=>{
    res.send("Hello Every one welcome to backend!!")
    next();
})

