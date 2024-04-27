const express=require('express');
const mongoose=require('mongoose')
const productRouter=require('./routes/productsRoutes.js')
const userRouter=require('./routes/userroute.js')
const test=require('./models/productsModel.js')
const app=express();
app.use(express.json())     ////////

app.use('/api/products',productRouter);
app.use('/api/users',userRouter);

const url='mongodb+srv://tanu088:abcd@cluster0.ouzbeau.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databasename="Amazonbackend"
let dblink=url.replace("$_DB_NAME_$",databasename)
mongoose.connect(dblink)
.then(
 ()=>console.log("............database connected...............")

)
app.listen(2000)