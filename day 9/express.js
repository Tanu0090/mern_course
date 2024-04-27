const express = require('express')
const fs = require('fs')
const fspromises = require('fs/promises')
const app = express();
app.use(express.json());
// app.get('/api/recipes',(req,res)=>{
//     const data=fs.readFileSync('./data.json','utf8');
//     cons
//     const arr=JSON.parse(data).recipes;
//     res.json(
//     {
//         status:'success',
//         results:arr.length,
//         data:{
//             recipes:arr,
//         }

//     });

// })

//////////////////get request/////////////////
app.get('/api/recipes', async (req, res) => {
    const data = await fspromises.readFile('./data.json', 'utf8');
    const arr = JSON.parse(data);
    res.json(
        {
            status: 'success',
            results: arr.length,
            data: {
                recipes: arr,
            }

        });

})


///////////////////post request//////////////
app.post('/api/recipes', async (req, res) => {
    const data = req.body;
    const db = await fspromises.readFile("./data.json", 'utf8');
    const arr = JSON.parse(db);
    const len = arr.length;
    const newitem = data;

    if (len == 0) {
        newitem.id = 1;
        // arr.push(newitem);
        // fspromises.writeFile('./data.json',JSON.stringify(arr));
    }
    else {
        newitem.id = (arr[len - 1].id) + 1;
        // arr.push(newitem);
        // fspromises.writeFile('./data.json',JSON.stringify(arr));
    }
    arr.push(newitem);
    fspromises.writeFile('./data.json', JSON.stringify(arr));
    res.json({
        status: 'success',
        results: 1,
        data: {
            newitem: newitem
        }
    })

})




////////////////////put request///////////////
app.put('/api/products/:id',async(req,res)=>
{
   const arr=JSON.parse(await fspromises.readFile('./data.json','utf8'))
   
    // res.send("work in progress")  /// har eak request me response sirf eak baar send hoga 
   const newid=parseInt(req.params.id);
    const data=req.body
    data.id=newid
    // console.log(data);

    const newarr=arr.map((elem)=>
    {
        if(elem.id==newid) return data;
        else return elem;

    })
    fspromises.writeFile('./data.json',JSON.stringify(newarr))

    res.json({
        status:'success',
        results:1,
        
            data: {
                newProduct:data,
            }
       

    })
    console.log(data);

})

app.listen(1400);