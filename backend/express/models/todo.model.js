
const mongoose=require('mongoose')

const{Schema} = mongoose


const todoschema = new Schema ({
    
    task:{type:String,required:true},
    ownerid:{type:mongoose.Schema.Types.ObjectId,required:true}
    // _id:mongoose.Schema.Types.ObjectId
},{timestamps:true})

const todo = mongoose.model('todo',todoschema)
module.exports = todo