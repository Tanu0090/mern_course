const express=require('express');
const userRouter=express.Router();
const usercontroller=require('../controller/userController.js')
userRouter.route('/')
    .get(usercontroller.getAllusers)
    .post(usercontroller.adduser);
userRouter.route('/:id')
    .put(usercontroller.replaceuser)
      .delete(usercontroller.deleteuser)    


module.exports=userRouter;