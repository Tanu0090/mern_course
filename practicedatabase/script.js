const express=require('express')
const app=express()

const productrouter=require('./routes/productroute')
app.use(express.json())
app.use('/api/products',productrouter)
const mongoose=require('mongoose')
const url='mongodb+srv://tanu088:abcd@cluster0.ouzbeau.mongodb.net/$dbname$?retryWrites=true&w=majority&appName=Cluster0'
const databasename='practicedatabase'
let dblink=url.replace('$dbname$',databasename)
mongoose.connect(dblink)
.then(
    ()=>console.log("........database connected.....")
)

app.listen(2000);
