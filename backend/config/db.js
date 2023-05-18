require("dotenv").config();
const mongoose = require("mongoose");
console.log(process.env.MONGO_URI)
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB connection success!! ");
    }catch(error){
        console.error("MongoDB connection fail!! ");
        process.exit(1);
    }
}
module.exports=connectDB;