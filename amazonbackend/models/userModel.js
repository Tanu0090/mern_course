const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number
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
const usermodel = mongoose.model('user', userSchema)

// const testuser = new usermodel({
//     title: "titan watch",
//     price: 333,
//     name:"tanu malik"
// })
// testuser.save().then((res) => {

//     console.log(res);
// })
module.exports=usermodel;