// let a=new String("hello")
// let b="hello"
// console.log (typeof(a))

// const obj = {
//     "name":"tanu",
//     "lastname":"singh"
// }
// // document.write(JSON.stringify(obj))
// obj.name=20;
// console.log(obj)


// const arr=[1,2,5];

// arr=[4,5,7,9,1]
// console.log(arr);


// const arr=[1,2,5];
// arr[10]=38;
// console.log(arr);

// const arr=[1,2,5];
// arr.push(13)
// console.log(typeof(arr));


// const arr=[1,2,5];
// arr[2]=45
// console.log(arr);


// const arr=[1,2,5];
// console.log();


//  const obj = {
//          "name":"tanu",
//         "lastname":"singh"
// }
// const arr=[1,2,5];
//  arr[2]=45
//  console.log(typeof(arr));
 
//  console.log(typeof(obj));

//  console.log(Array.isArray(arr));
 
//  console.log(Array.isArray(obj));



//   const obj = {
//          "name":"tanu",
//         "lastname":"singh"
//  }
//  const arr=[1,2,5];
// function check(aee){
//     return !(Array.isArray(aee))

// }
// console.log(check(arr));
//    console.log(check(obj));

//    const obj = {
//     "name":"tanu",
//    "lastname":"singh"
// }
// const arr=[1,2,5];
// for(let i of arr){
//     console.log(i);
// }

// for(let i of obj){
//     console.log(i);
// }

// for(let i in arr){
//     console.log(i);
// }

// for(let i in obj){
//     console.log( obj[i]);
// }

// console.log(window);

// console.log(innerHeight);
// console.log(innerWidth);


// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.document);
// console.log(window);


// console.log(document);
// console.dir(document);
// let a=document.getElementsByTagName('h3')
// console.log(a);

// const a=document.getElementById('t1')
// console.dir(a);

// let res=document.getElementById('t2');
// console.dir(res)

// let res=document.querySelectorAll('div>c1');
// console.log(res)

// const a= document.createElement("button");
// a.innerHTML="Dyanamic text"


// console.log(a);
// document.body.appendChild(a);

// let res=document.getElementsByTagName('button')
// res[0].setAttribute('id','btn');

// const r= document.createElement("button");
// r.innerHTML="Dyanamic text"

//  console.log(r);
//  document.body.appendChild(r);

// let s=document.getElementsByTagName('button')
// s[0].setAttribute('class','btn');

// let h =document.getElementsByClassName('btn')
// h.remove();

// const res=
// document.querySelector('div');
// // res.remove();
// const r = document.querySelector('p:nth-of-type(1)');
// res.removeChild(r);
// function getInfo (e){
// // console.log('button clicked')
// // const res= document.querySelector("div")
// // res.append("  my name is tanu   ")

// console.log(e)
// e.target.setAttribute(
//    'style','color: red'
// )
// e.target.style.background='pink'

// e.target.style.color='blue'
// e.target.style.margin='200px'
// }


// const first=(e)=>{
//    const v= e.target.value
//    if(v.length>3)
//        console.log('checking')
// }
// const ssubmit=(e)=>{
//    e.preventDefault();
//    const t =e.target
//    const res={
//       hobbies:[],
//    };
//    for(let i=0;i<t.length;i++){
      
//        const ty=t[i].type;
//        if(ty!='submit'){
//         const vl=t[i].value;
        
//         const vm=t[i].name;
      

//       if(ty=="checkbox" && t[i].checked){
//      res.hobbies.push(vl)
//       }
//       if(ty!="checkbox")
//       {
//        res[vm]=vl;
//       }
//    }
// }
//    console.log(res);
// }
