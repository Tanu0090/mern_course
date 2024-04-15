const express=require('express')

const app=express()
// app.get('/home',(req,res)=>{
//  res.send('<h1>welcome get</h1>');
// })
// app.get('/product',(req,res)=>{
//     res.send('<h1>welcome product</h1>');
//    })
//    app.get('/about',(req,res)=>{
//     res.send('<h1>welcome petch</h1>');
//    })
//    app.get('/second',(req,res)=>{
//     res.send('<h1>welcome put</h1>');
//    })
 
app.get('/home',(req,res)=>{
    res.send('<h1>welcome get</h1>');
   })
   app.put('/product',(req,res)=>{
       res.send('<h1>welcome product</h1>');
      })
      app.patch('/about',(req,res)=>{
       res.send('<h1>welcome petch</h1>');
      })
      app.delete('/second',(req,res)=>{
       res.send('<h1>welcome delete</h1>');
      })
    



app.listen(1400)