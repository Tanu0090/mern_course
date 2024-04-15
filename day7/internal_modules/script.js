// const fs=require('node:fs');
// const data=fs.readFileSync('./myReadme.txt');
// console.log(data.toString());

// const fs=require('fs');
// const data=fs.readFileSync('./myReadme.txt',{encoding:'utf8'});
// console.log(data);

// const b= new Buffer.from('svdhda');
// console.log(b);

// const c= new Buffer.from('svdhda');
// console.log(c.toString());
// c.write('other');
// console.log(c.toString());


// const fs=require('fs');
// fs.writeFileSync('./logs..txt',"10th april 2024")



// const fs=require('fs');
// console.log("start");
// const data=fs.readFileSync('./myReadme.txt',{encoding:'utf8'});
// console.log(data);
// // console.log("end");

// const fsPromises=require('fs/promises');

// const pr=fsPromises.readFile('./myReadme.txt',{encoding:'utf8'});
// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// })

// call back in file FileSystem
// const fs=require('fs');
// fs.readFile('./myReadme.txt',{encoding:'utf8'},(err,data)=>{
//     console.log(data);
//  });

// const http=require('http')
// const app=http.createServer((req,res)=>{
// //  console.log('request received')
// // console.log((Object.keys(req)));
//  console.log(req.url);
//  res.writeHead(200,{
//     "content-type":"text/html",
//  })



//  res.end();

// })

// app.listen(2000,()=>{
//     console.log('..........server started.........')
// });

const http = require('http');
const fs=require('fs');

const data=fs.readFileSync('./data.json','utf8');
const dataObj=JSON.parse(data);
const product=dataObj.products;
const htmlTemplete = `<!DOCTYPE HTML>
<html lang='en'>
    <head><style>
     .product-card{
              width:350px;
              height:200px;
              margin:20px auto;
              padding:15px;
              border: 2px solid black;
              background-color:skyblue;
              border-radius:5px;
    }
     main{
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    background-color:blue; */
    display: flex;
    flex-wrap:wrap;
    
    flex-direction: row;
    } 
    
    
    </style>
    
    </head>
    <body>
    <header></header>
    <main>
        productcard
        </main>
    </body>
</html>`

const CardTemplete=`
<div class='product-card'>
    <h1>title</h1>
    <h3>category</h3>
    <img src=source>
    <p>info</p>
</div>
`;
// const card1=CardTemplete
// .replace('title','SAMSUNG')
// .replace('info','SAMSUNG')
// const card2=CardTemplete
// .replace('title','SAMSUNG')
// .replace('info','SAMSUNG')
// const allCard=card1+card2;


const allCard=product.map((elem)=>{
   let  newcard=CardTemplete;
 newcard=newcard.replace('title',elem.title);
 newcard=newcard.replace('category',elem.category);
 newcard=newcard.replace('source',elem.images[0]);
 newcard=newcard.replace('info',elem.description);
return newcard;

})


const page = htmlTemplete.replace('productcard',allCard);
const app = http.createServer((req, res) => {
    console.log('request recieved');
    console.log(req.url);
    res.writeHead(200, { 'content-type': 'text/html', })
    res.end(page);
});
app.listen(2000, () => {
    console.log('................server started..................')
});