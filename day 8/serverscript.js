// console.log('...........recipies...........')
const fs=require("fs")
const http=require("http");
const url=require("url");
const data=fs.readFileSync("./data.json","utf8");
const dataObj=JSON.parse(data).recipes;
// console.log(data);
const htmlTemplate=`
<!DOCTYPE html>
<html lang="en">
<head>
<style>
.r-card{
    width:350px;
    height:300px;
    border:2px solid black;
    margin:20px auto;
    padding:16px;
    border-radius:8px;
    background-color:brown;
    color:white;
}
main{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
}

</style>
</head>
<body>
  <main>
   recipes
  </main>
</body>
</html>
`
const cardTemplate=`
<div class="r-card">
<h2>name</h2>
<p>cuisine</p>
<img src="uu" alt='recipe-img'  style = "width:200px; height:200px"/>
<a href="yyy">more-info</a>

</div>
`
let result=[];
for(let i=0;i<dataObj.length;i++){
    let temp=cardTemplate;
    temp=temp.replace('name',dataObj[i].name);
    temp=temp.replace('cuisine',dataObj[i].cuisine);
    temp=temp.replace('uu',dataObj[i].image);
    temp=temp.replace('yyy',`/recipes?id=${i}`);
    result.push(temp);
}

result=result.join('  ')
const page=htmlTemplate.replace('recipes',result);


// console.log(result)
const server =http.createServer((req,res)=>{
    // const {pathname,query}=url.parse(req.url,true);
    const path=url.parse(req.url,true);
    // console.log('\n',query,'\n');
    // console.log('\n',pathname,'\n');
    const pathname=path.pathname;
    const query=path.query;
    
    if(pathname==='/home'){
        res.end(page);
    
    }
    else if(pathname==='/recipes'){
        // res.end('recip-epage')  
        const id=query.id;
        const item=dataObj[id]; 
        let tags_string = item.tags.join('</li>\n\t<li>');
        tags_string = '<ul type="square">\n\t<li>'+tags_string+'</li>\n</ul>';
            res.end(`
       
            <div>
         <h2> ${item.name}  </h2>
         <h2> ${item.cuisine}  </h2>
         <img src="${item.image}"  style = "width:200px; height:200px"/>
         <h3> ${item.ingredients}  </h3> 
         ${tags_string} 
         <p> ${item.instructions}  </p> 
         </div>
            `)
        // console.log(dataObj[id]); 
    }
    else{
        res.end('404 .......page not found')
    }
    // res.end(result);
})

server.listen(2000);