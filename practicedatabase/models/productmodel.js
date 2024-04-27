const mongoose=require('mongoose')
const productschema=mongoose.Schema({
    title:{
     type:String,
     unique:true,
     required:true,
    },
    price:{
        type:Number,
        required:true,
    }
})
const productmodel=mongoose.model('product',productschema)   ///collection bnata hai particular database or usme schema ko daal deta hai
module.exports=productmodel;