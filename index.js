const express = require('express');
const mongo =require('./database');
const employeeRouter=require('./router/user');

const app=express();

app.use(express.json());

mongo.connect();

app.use('/',(req,res,next)=>{
    console.log("Middlewares");
    next();
})

app.use('/userdetials',employeeRouter);

app.listen('3000');