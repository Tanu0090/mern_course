// let arr=[2,3,4,5,6,7];

// function printarray(arr){
//     for(let i=0;i<arr.length;i++)
//       console.log(arr[i])
// }

// printarray(arr);

// console.log("....APP started.......")
// function callAPI(){
//  fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7e388d77c8ac4e199db87e4ec9ce05d6")
//  .then((res)=>
//  {
//     console.log(res)
//  }


// )
    

// }

// const req= fetch("https://dummyjson.com/products")
// const res= req.then((data) => console.log(data))


function renderUI(){
    const root=document.getElementById('root');
    const div=document.createElement("div")
    div.innerHTML="tanu malik";
    root.appendChild(div);
}
renderUI();