const mongoose  = require("mongoose")


const connectDB =  () =>{
    //const uri = "mongodb://localhost:27017/UsersDB" // like URL but not Only for browesrs
    const uri = "mongodb+srv://renanbazinin2:zxc@cluster0.oqs58.mongodb.net/?retryWrites=true&w=majority"
    ///option for mongoose
    const options ={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    
    };
    mongoose.connect(uri,options)
    
};

module.exports = connectDB;
