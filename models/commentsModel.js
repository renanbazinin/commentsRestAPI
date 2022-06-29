const mongoose  = require("mongoose");
const Schema = mongoose.Schema;


//Schemaaa
const commentSchema = new Schema({
    
    type:{type:String , required:true},
    text:{type:String , required:true},

  


});

module.exports = mongoose.model('comment',commentSchema);

