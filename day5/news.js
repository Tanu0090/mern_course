
console.log("....APP started.......")
function callAPI(){
 fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7e388d77c8ac4e199db87e4ec9ce05d6")
 .then((res)=>res.json())
 .then((data)=> renderUI(data))
    

}


function renderUI(data){
    // console.log(data)
    const articles=data.articles;
    const root=document.getElementById('root');
    for(let i=0;i<articles.length;i++){
        const ar=articles[i];
         const div=document.createElement("div")
    div.setAttribute("class","news-card")

    const h3= document.createElement("h3");
    h3.innerHTML=ar.title;

    const img=document.createElement("img");
    img.src=ar.urlToImage;

    const p=document.createElement("p");
    p.innerHTML=ar.description;
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(img);
    // div.innerHTML=ar.title;
       root.appendChild(div);
    }
    // console.log(articles);
   

    
    // console.log(ar);
   
}
callAPI();