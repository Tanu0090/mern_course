const productModel=require('../models/productsModel.js');
const getAllProducts= async (req,res)=>{
    
    const q=req.query;
    console.log(q);
    const query=  productModel.find(q);
    products=data.products.find(q)
    const products=await query;
    console.log(req.url);

res.send({
    status:'success',
    results:0,
    data:{
        products:products
    }
})

}
const addProduct= async(req,res)=>{
try{
    const {id,...data}=await productModel.create(req.body)
    console.log(data);

res.json({
    status:'success',
    results:1,
    data:{
        products:data,
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


const replaceProduct=async(req,res)=>{
   try{
    const reqId=req.params.id;
    const data={...req.body,reqId};
    const results=await productModel.findOneAndReplace({_id: reqId},data)
    
    res.json({
        status:"success"
    })
   }

catch(err){
   res.json({
    status:'replace failed',
    data:{
        product:[err],
    }
   })
   
}
}

const deleteproduct=async(req,res)=>{
    try{
        const reqId=req.params.id;
        const data={...req.body,reqId};
        const results=await productModel.deleteOne({_id: reqId},data)
        
        res.json({
            status:"success"
        })
       }
    
    catch(err){
       res.json({
        status:'delete failed',
        data:{
            product:[err],
        }
    
    
    
    
       })
    }
}


module.exports={
    getAllProducts,
    addProduct,
    replaceProduct,
    deleteproduct,
}