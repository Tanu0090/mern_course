const express=require('express')
const productcontroller=require('../controller/productcontroller')
const productrouter=express.Router();
productrouter.route('/')
.get(productcontroller.getAllProducts)
.post(productcontroller.addPrduct)
productrouter.route('/:id')
 .put(productcontroller.editProduct)
 .delete(productcontroller.deleteProduct)
module.exports=productrouter;