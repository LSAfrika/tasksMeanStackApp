const mongoose = require('mongoose')

const usermodel = require('../models/user.model')

exports.signin= async (req,res,next)=>{
    
}
exports.signup= async (req,res,next)=>{
    try {
        const {email,password}=req.body
        console.log(email,password);
        res.status(200).send({email,password})
        next()
    } catch (error) {
        
    }
    
}
exports.signout= async (req,res,next)=>{
    
}