const mongoose = require('mongoose')
const{Schema}= mongoose

const userschema = Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:{type:String, required:true},
    password:{type:String, required:true},
},{timestamps:true})

module.exports = mongoose.model('user',userschema)