const userModel=require('../models/userModel.js');
const getAllusers = async (req,res)=>{
    
    const q=req.query;
    console.log(q);
    const query=  userModel.find(q);
    
    // products=data.products.find(q)


    const user=await query;
    
    console.log(req.url);

res.send({


    status:'success',
    results:0,
    data:{
        user:users
    }
})


}
const adduser= async(req,res)=>{
try{
    const {id,...data}=await userModel.create(req.body)
    console.log(data);
res.json({
    status:'success',
    results:1,
    data:{
        user:data,
    }
})
}



catch(err){
    res.status()
    console.log(err);
    res.json({
        status:'fail',
        message:JSON.stringify(err),
    })
}
}


const replaceuser=async(req,res)=>{
   try{
    const reqId=req.params.id;
    const data={...req.body,reqId};
    const results=await userModel.findOneAndReplace({_id: reqId},data)
    
    res.json({
        status:"success"
    })
   }

catch(err){
   res.json({
    status:'replace failed',
    data:{
        user:[err],
    }




   })
   
}
}

const deleteuser=async(req,res)=>{
    try{
        const reqId=req.params.id;
        const data={...req.body,reqId};
        const results=await userModel.deleteOne({_id: reqId},data)
        
        res.json({
            status:"success"
        })
       }
    
    catch(err){
       res.json({
        status:'delete failed',
        data:{
            user:[err],
        }
    
    
    
    
       })
    }
}


module.exports={
    getAllusers,
    adduser,
    replaceuser,
    deleteuser,
}