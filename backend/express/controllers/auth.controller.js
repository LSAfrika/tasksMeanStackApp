const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const usermodel = require('../models/user.model')
require('dotenv').config()
const JWT = require('jsonwebtoken')

exports.signin= async (req,res,next)=>{

    try {
        const {email,password}=req.body
        const finduser = await usermodel.findOne({email:email})
        if(!finduser){
          return  res.status(404).send({message: 'email/password mismatch'})
        }
         console.log(finduser)
         const passwordcompare= await bcrypt.compare(password, finduser.password)

         if(passwordcompare!==true){

            return res.status(500).send({message:'please check email and password'})
         }

         const payload ={
             id:finduser._id,
             email:finduser.email
         }
         const options ={
            expiresIn:'1h'
         }
       const sigintoken=  JWT.sign(payload,process.env.JWT_KEY,options)
          res.status(200).send({sigintoken})

        
    } catch (error) {
        res.send(error.message)
        
    }

    
}
exports.signup= async (req,res,next)=>{
    try {
        const {email,password,reenteredpassword}=req.body
        console.log(email,password,reenteredpassword);
        const finduser = await usermodel.findOne({email:email})
        if(finduser){
          return  res.status(409).send({message: 'email already exists'})
        }
        // if(password!==reenteredpassword){
        //     return res.status(500).send('password are not similar')
        // }

       const hash=await bcrypt.hash(password,10)

        console.log(hash);
       const newuser = new usermodel({
        _id:mongoose.Types.ObjectId(),
        email,
        password:hash

    })

    const newuserresult = await newuser.save()

  const  userresponse={
        id:newuserresult._id,
       email: newuserresult.email
    }

    res.status(200).send({message:'user created successfully',...userresponse})

  

       // next()
    } catch (error) {

        return res.status(500).send({errormessage:error.message,servermessage:'an error occured'})
        
        
    }
    
}
exports.signout= async (req,res,next)=>{
    
}