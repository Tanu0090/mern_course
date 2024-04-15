// const figlet=require('figlet')
// figlet('hello tanu malik a jatni',(err,data)=>{
//     console.log(data);
// })

// fetch('')
// .then((res)=>{
//     return res .json();
// })function 


async function getapi(){
    const pr = await fetch('https://api.github.com/users/tanu090');
    const data=await pr.json();
    console.log(data);
}  
getapi();




