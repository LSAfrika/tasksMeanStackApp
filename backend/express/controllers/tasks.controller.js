const taskmodel = require('../models/todo.model')


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
                id:resdata._id
            }

            return finaldata
        })
     //   console.log(formatresult);
        res.send(formatresult)
    } catch (error) {
        res.send(error)
    }
}

exports.posttask =async(req,res)=>{

    try {
        const data = req.body
        console.log('data: ',data);
       const tasktosave = new taskmodel(data)
console.log('task to be saved: ',tasktosave);
   const result =await tasktosave.save()
   console.log(result);
   returnresult ={
       task:result.task,
       id:result._id
   }
    
await res.send(returnresult)
        
    } catch (error) {
        res.send(error);
        
    }
    
}

exports.patchtask =async(req,res)=>{
    try {
        const id =req.params.id 
        const reqtask = req.body.task
        console.log('task received: ',reqtask);

        const doc = await taskmodel.findByIdAndUpdate(id,{task:reqtask.task})
        console.log('updated succesfuly',doc)
        res.send(doc)
    } catch (error) {
        console.log('error: ',error)
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