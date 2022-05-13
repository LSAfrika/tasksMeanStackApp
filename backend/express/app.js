
const express = require('express')
const mongoose=require('mongoose')
const cors =require('cors')
const path = require('path')
const app = express()
const { testroute, getalltasks, posttask, deletetask,patchtask}=require('./controllers/tasks.controller')


app.use(cors())
app.use(express.json());  
app.use('/views', express.static('public'))
app.use('/views/*', express.static('public'))
app.use('/', express.static('public'))



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

app.post('/api/posttask',posttask)

app.patch('/api/patchtask/:id',patchtask)

app.delete('/api/deletetask/:id',deletetask)









mongoose.connect('mongodb://localhost:27017/tasks',{useNewUrlParser:true,useunifiedtopology:true}).
then(()=>{
    console.log('connected succesfully')
    app.listen(3000,()=>{
        console.log('server is running');
    })
}).catch(err=>console.log(err))

