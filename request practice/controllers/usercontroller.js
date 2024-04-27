const fspromises = require('fs/promises')
const getuser=async (req, res) => {
    const data = await fspromises.readFile('./data.json', 'utf8')
    const obj = JSON.parse(data);
    res.json({
        status: "success",
        results: obj.length,
        data: {
            users: obj,
        }
    })
}

const postuser=async (req, res) => {
    const data = req.body
    //postmen ki body se jo request aaye vo data me daal dii////////
    const obj = await fspromises.readFile('./data.json', 'utf8')
    const arr = JSON.parse(obj);
    const len = arr.length;
    const newdata = data;
    if (len == 0) {
        newdata.id = 1,
            arr.push(newdata)
            // console.log(arr);
        fspromises.writeFile('./data.json', JSON.stringify(arr));

    }
    else {
        newdata.id=(arr[len-1].id)+1;
        arr.push(newdata)
        fspromises.writeFile('./data.json',JSON.stringify(arr));
    }
    res.json({
        status: "success",
        results: 1,
        data: {
            user: newdata
        }


    })
}

const putuser=async(req,res)=>{
    const data=req.body
    const obj= await fspromises.readFile('./data.json','utf8')
    const arr=JSON.parse(obj)
    const newid=parseInt(req.params.id);
    data.id=newid

    const newarr=arr.map((elem)=>{
        if(elem.id==newid) return data;
        else return elem;

    })
    fspromises.writeFile('./data.json',JSON.stringify(newarr))
     res.json({
        status:"success",
        results:1,
        data:{
         newdata:data
        }
     })    
}


const deleteuser=async(req,res)=>{
    const obj= await fspromises.readFile('./data.json','utf8')
    const arr=JSON.parse(obj)
    const newid=parseInt(req.params.id);
    const newarr=arr.filter((elem)=>{
   if(elem.id===newid )  return false;
   else return true;

    })
    fspromises.writeFile("./data.json",JSON.stringify(newarr));
    
    res.json({
      status:"success",
      results:1,
      data:{
        newdata:null
      }      
    })



}



module.exports={
    getuser,
    postuser,
    putuser,
    deleteuser
}