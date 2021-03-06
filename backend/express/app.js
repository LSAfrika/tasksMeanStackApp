
const express = require('express')
const mongoose=require('mongoose')
const cors =require('cors')
const path = require('path')
const app = express()
require('dotenv').config()
const authverifiction= require('./middleware/auth.middleware')
const { testroute, getalltasks, posttask, deletetask,patchtask,getusertasks}=require('./controllers/tasks.controller')
const { signup, signin, signout } = require('./controllers/auth.controller')

app.use(cors()) 
app.use(express.json());  
app.use('/views', express.static('public'))
app.use('/views/*', express.static('public'))
app.use('/', express.static('public'))

const DBconnection =`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ddt01.mongodb.net/Tasks`
const LocalDBconnection =`mongodb://localhost:27017/Tasks`
app.get('/',(req,res)=>{

    res.redirect('/views') 

})

app.get('/views/*',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
// res.send('hello world')

})

app.get('/api/test',(req,res)=>{
    console.log('api has been called')
    res.send({message:'router is working'})
})

app.get('/api/tasks',testroute)

app.get('/api/gettasks',getalltasks)
app.get('/api/gettasks/:id',getusertasks)

app.post('/api/posttask',authverifiction,posttask)

app.patch('/api/patchtask/:id',authverifiction,patchtask)

app.delete('/api/deletetask/:id',authverifiction,deletetask)


// auth routes
app.post('/api/signin',signin)
app.post('/api/signup',signup)
app.post('/api/logout',signout)









mongoose.connect(LocalDBconnection,{useNewUrlParser:true,useunifiedtopology:true}).
then(()=>{
    console.log('connected succesfully')
    app.listen(3000,()=>{
        console.log('server is running');
    })
}).catch(err=>console.log(err))

