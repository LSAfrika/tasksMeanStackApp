const taskmodel = require('../models/todo.model')
const mongoose=require('mongoose')


exports.testroute = async(req,res)=>{
  //  console.log('api has been called')
    res.send({message:'router is working'})
}

exports.getalltasks =async(req,res)=>{
    try {
        
        const result = await taskmodel.find()

        const formatresult= result.map(resdata=>{
            const finaldata ={
                task:resdata.task,
                id:resdata._id,
                ownerid:resdata.ownerid
            }

            return finaldata
        })
     //   console.log(formatresult);
        res.send(formatresult)
    } catch (error) {
        res.send(error)
    }
}

exports.getusertasks = async (req,res)=>{
    try {
        userid=req.params.id
     const userdata= await   taskmodel.find({ownerid:userid})
     if(userdata.length===0){
         return res.send({message:"no user tasks found",userdata})
     }
     res.status(200).send({userdata})
        
    } catch (error) {
        res.status(500).send({errormessage:error.message})
    }
}

exports.posttask =async(req,res)=>{

    try {
        const data = req.body
      //  console.log('data: ',data);
       const tasktosave = new taskmodel(
           {task:data.task,ownerid:data.ownerid 
        // ,_id:new mongoose.Types.ObjectId()
    })
console.log('task to be saved: ',tasktosave);
    const result =await tasktosave.save()
    

        console.log(result);
        returnresult ={
            task:result.task,
            id:result._id,
            createdAt:result.createdAt,
            updatedAt:result.updatedAt
        }
    
        
await res.send(returnresult)
        
    } catch (error) {
        res.send(error.message);
        
    }
    
}

exports.patchtask =async(req,res)=>{
    try {
        const id =req.params.id 
        const reqtask = req.body.task
        console.log('task received: ',reqtask);

        const doc = await taskmodel.findOneAndUpdate({_id:id},{task:reqtask})
        console.log('updated succesfuly',doc)
        res.send(doc)
    } catch (error) {
        console.log('error: ',error.message)
    }
}

exports.deletetask =async(req,res)=>{

    try {
        const id  = req.params.id
        const result = await taskmodel.findByIdAndDelete(id)
        console.log('deleted succesfully ',result);
        const response ={
            message:`${result._id} was task succesfully deleted`
            
        }
        res.send(response)
    } catch (error) {
        res.send({message:'error caught',...error})
    }
}