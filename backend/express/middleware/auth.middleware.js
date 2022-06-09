const JWT = require('jsonwebtoken')


module.exports=(req,res,next)=>{
    try {

        const reqtoken=req.headers.authorization

        console.log('headers token: ',reqtoken);

        const token = reqtoken.split(' ')[1]
        console.log('Actual token: ',token);



        const verified=JWT.verify(token,process.env.JWT_KEY)
       // console.log('verfird token: ',verified.id);
        
      //  console.log('body before: ',req.body);
        req.body.ownerid=verified.id
       // console.log('owner id: ',req.ownerid);

       // console.log('body after: ',req.body);

    next()

    } catch (error) {
      console.log(error.message);
       return res.status(401).send({message:'auth failed'})
    }

}