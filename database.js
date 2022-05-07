const {MongoClient}=require('mongodb');
 module.exports={
     selectedDb:{},
     async connect(){
         try {
            const client= await MongoClient.connect("mongodb://localhost:27017");
            this.selectedDb=client.db('zenclassdb');
         } 
         catch (error) {
             console.log(error);
         }
         
     }
 }