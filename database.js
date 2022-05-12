const {MongoClient}=require('mongodb');
 module.exports={
     selectedDb:{},
     async connect(){
         try {
            const client= await MongoClient.connect("mongodb+srv://SusheelKumaraswamy:rIKYqMGFJyVRIQl7@cluster0.leiii.mongodb.net?retryWrites=true&w=majority");
            this.selectedDb=client.db('hallbooking');
            console.log(this.selectedDb);
         } 
         catch (error) {
             console.log(error);
         }
         
     }
 }