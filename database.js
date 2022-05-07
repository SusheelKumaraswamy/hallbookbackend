const {MongoClient}=require('mongodb');
 module.exports={
     selectedDb:{},
     async connect(){
         try {
            const client= await MongoClient.connect("mongodb://localhost:27017");
            this.selectedDb=client.db('hallbooking');
         } 
         catch (error) {
             console.log(error);
         }
         
     }
 }