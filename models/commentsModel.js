const mongoose  = require("mongoose");
const Schema = mongoose.Schema;


//Schemaaa
const commentSchema = new Schema({
    
    type:{type:String , required:true},
    text:{type:String , required:true},
    subject:{type:String, required:true},
    name:{type:String, required:false}


});

module.exports = mongoose.model('comment',commentSchema);

