
const mongoose=require('mongoose')

const{Schema} = mongoose

const todoschema = new Schema ({
    
    task:{type:String,required:true}
})

const todo = mongoose.model('todo',todoschema)
module.exports = todo