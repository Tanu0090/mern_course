const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    price:{

        type:Number,
        required:true
    },

        description:String,
        images:[String],
      
        createdAt:{
             type:Date,
             default:new Date(),
        },
        updatedAt:{
            type:Date,
            default:new Date(),
       }    
})
const productmodel = mongoose.model('product', productSchema)

// const testproduct = new productmodel({
//     title: "titan watch",
//     price: 333,
//     name:"tanu malik"
// })
// testproduct.save().then((res) => {

//     console.log(res);
// })
module.exports=productmodel;