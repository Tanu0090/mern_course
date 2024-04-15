// console.log('start')
// setTimeout(()=>{
//     console.log('timeout')
// },4000)

// // console.log('start')
// setInterval(()=>{
//     console.log('timeinterval')
// },2000)
// console.log('intermediate')
// console.log('end')

// function createorder(x,fn){

// }


// setTimeout(()=>{console.log('first timeout')},0);
//  const pr=new Promise((resolve,reject)=>
// {

//     setTimeout(()=>{
//         reject("done-123");
//     },10000
// );});
// // console.log(pr);

// pr.then((res)=>
// {
//     console.log(res);
// }).catch((err)=>
// {
//     console.log(err);
// })


// let a=false

// let p1=new Promise((resolve,reject)=>
// {
//     if(a)
//     {
//         resolve("a is true")
//     }
//     else{
//         reject("a is false")
//     }
// });
// p1.then((res)=>
// {
//     console.log(res)

// })
// .catch((err)=>
// {
//     console.log(err)
// })

// setTimeout(function abc(){
//     console.log('i am one');
// },0)
// const pr =new Promise((res,rej)=>{



// })



async function callapi(){
  
  
    console.log('promise start')
    const pr=new Promise((res,rej)=>{
      console.log('promise started')
      setTimeout(()=>{
        console.log('time out1...')
      },10000)
    })
  }
  
    console.log('promise completed')
    callapi();