// console.log('...........recipies...........')
const fs=require("fs")
const http=require("http");
const url=require("url");
const data=fs.readFileSync("./data.json","utf8");
const dataObj=JSON.parse(data).recipes;
const inputElement=`
<form action="/recipes">
<input type="text" name="recipesname"></input>
<button type="submit">search</button>

</form>
`
// console.log(data);
const htmlTemplate=`
<!DOCTYPE html>
<html lang="en">
<head>
<style>
.r-card{
    width:400px;
    height:350px;
    border:2px solid black;
    margin:20px auto;
    padding:10px;
    border-radius:8px;
    background-color:skyblue;
    
    display:flex;
    // justify-content:center;
    flex-direction:column;
    align-items:center;
}
// 
// h3{
//     font-size:25px;
// }
// img{
//     margin-bottom:30px;
// }

// p{
//     font-size:25px;
//  }
// .di{
//     width:300px;
//     height:350px;
//     border:2px solid black;
//     margin:20px auto;
//     padding:20px;
//     border-radius:20px;
//     background-color:skyblue;
//     color:white;
//     display:flex;
//     justify-content:center;
//     flex-direction:column;
//     align-items:center;





// }
a{
    border:1px solid black;
    padding:3px;
    background-color:orange;
}
img{
    height:150px;
    width:200px;
}
main{

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
<h3>Dish Name :name</h3>

<img src="uu" alt='recipe-img'  />

<h4>Cuisine : cuisine</h4>
<p>Level: difficulty</p>
<a href="yyy">more-info</a>

</div>
`
let result=[];
for(let i=0;i<dataObj.length;i++){
    let temp=cardTemplate;
    temp=temp.replace('name',dataObj[i].name);
    temp=temp.replace('cuisine',dataObj[i].cuisine);
    temp=temp.replace('difficulty',dataObj[i].difficulty);
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
  res.writeHead(200,{
    'content-type':'text/html'
  })
    // console.log('\n',query,'\n');
    // console.log('\n',pathname,'\n');
    const pathname=path.pathname;
    const query=path.query;
    
    if(pathname==='/home'){
        res.end(inputElement+page);
    
    }
    else if(pathname==='/recipes'){
        // res.end('recip-epage')  
        const id=query.id;
        const pname=query.recipesname ;
        if(pname){

            const sresult=dataObj.filter((elem)=>{
                if(elem.name.includes(pname)){
                    return true;
                }
                else{
                    false;
                }
            })
            res.end(JSON.stringify(sresult));
            // res.end(pname);
        }
        else{
            res.end('<h3>....recipes not found......</h3>')
        }


      







        // const item=dataObj[id]; 
        // let tags_string = item.tags.join('</li>\n\t<li>');
        // tags_string = '<ul type="square">\n\t<li>'+tags_string+'</li>\n</ul>';
        //     res.end(`
        //     <div style="
        //     width:1000px;
        //     height:500px;
        //     border:2px solid black;
        //     margin:20px auto;
        //     padding:20px;
        //     border-radius:25px;
        //     background-color:lightgrey;
        //     color:black;
        //     display:flex;
        //     justify-content:center;
        //     flex-direction:column;
        //     align-items:center;
        //     box-shadow:8px 8px 8px black;
        //     ">
        //  <h2> ${item.name}  </h2>
        //  <h2> ${item.cuisine}  </h2>
        //  <img src="${item.image}"  style = "width:200px; height:200px"/>
        //  <h3> ${item.ingredients}  </h3> 
        //  ${tags_string} 
        //  <p> ${item.instructions}  </p> 
        //  <p> ${item.difficulty}  </p> 
        //  </div>
        //     `)
        // console.log(dataObj[id]); 
    }
    else{
        res.end('404 .......page not found')
    }
    // res.end(result);
})

server.listen(2000);