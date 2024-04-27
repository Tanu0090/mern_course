const express=require('express');
const productRouter=express.Router();
const productcontroller=require('../controller/productsController.js')
productRouter.route('/')
    .get(productcontroller.getAllProducts)
    .post(productcontroller.addProduct);
productRouter.route('/:id')
    .put(productcontroller.replaceProduct)
      .delete(productcontroller.deleteproduct)    


module.exports=productRouter;