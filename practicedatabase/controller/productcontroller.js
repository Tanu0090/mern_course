const productmodel=require('../models/productmodel')
const getAllProducts = async(req,res)=>{

    const data=  await productmodel.find();
    console.log(data);
    res.json({
        status:'success',
        data:{
            data,
        }
    })
}
const addPrduct=async(req,res)=>{

const data=await productmodel.create(req.body);
console.log(data);
console.log(req.body)
res.json({
    status:'false',
    data:{
        product:data
    }
})

}
const editProduct=async(req,res)=>{
    const reqId=req.params.id;
    const re={...req.body,reqId}
    const data=await productmodel.findOneAndReplace({_id: reqId},re);
    // console.log(data);
    // console.log(req.body)
    res.json({
        status:'false',
        data:{
            product:data
        }
    })
    
    }
    const deleteProduct=async(req,res)=>{
        const reqId=req.params.id;
        const data=await productmodel.deleteOne({_id: reqId});
        // console.log(data);
        // console.log(req.body)
        res.json({
            status:'false',
            data:{
                product:data
            }
        })
        
        }

module.exports={
    getAllProducts,
    addPrduct,
    editProduct,
    deleteProduct
}
