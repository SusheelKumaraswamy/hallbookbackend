const {MongoClient}=require('mongodb');
const mongoose = require('mongoose');


 module.exports={
     selectedDb:{},
     async connect(){
         try {
            const client= await MongoClient.connect("mongodb+srv://SusheelKumaraswamy:cdCQTXK7LHKUQ24F@cluster0.leiii.mongodb.net?retryWrites=true&w=majority");
            this.selectedDb=client.db('hallbooking');
            console.log("DB Connected Successfully!");
         } 
         catch (error) {
             console.log(error);
         }
         
     }
 }

 //hello